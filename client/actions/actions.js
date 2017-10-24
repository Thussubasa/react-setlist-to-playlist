import axios from "axios";
import Spotify from "spotify-web-api-js";
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = "SPOTIFY_TOKENS";
export const SPOTIFY_ME_BEGIN = "SPOTIFY_ME_BEGIN";
export const SPOTIFY_ME_SUCCESS = "SPOTIFY_ME_SUCCESS";
export const SPOTIFY_ME_FAILURE = "SPOTIFY_ME_FAILURE";
export const SETLISTS_FETCHED = "SETLISTS_FETCHED";

/** set the app's access and refresh tokens */
export function setTokens({ accessToken, refreshToken }) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get the user's info from the /me api */
export function getMyInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN });
    spotifyApi
      .getMe()
      .then(data => {
        dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
      })
      .catch(e => {
        dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
      });
  };
}

const getDefaultSetlists = async artistName => {
  let response;
  try {
    response = await axios({
      method: "post",
      url: "http://localhost:5001/setlist.fm/searchSetlists",
      data: {
        artistName
      }
    });
  } catch (error) {
    console.log(error);
    response = error;
  }

  return response.data.setlists;
};

export function getSetlistsByArtistName(artistName) {
  return async (dispatch, getState) => {
    try {
      
      let setlists = [{}]
      let setlist = {};
      let songs = [];
      let setlistData = await getDefaultSetlists(artistName);


      setlistData.setlist.forEach((setlistInfo, index) => {
       
        setlists[index] = {};
        setlists[index].songs = [];
        setlists[index].title = [];
        setlists[index].title = setlistInfo.artist["@name"].concat(
          " - ",
          setlistInfo["@tour"],
          " - ",
          setlistInfo["@eventDate"]
        );
        

        if (!!setlistInfo.sets.set) {
          if (Array.isArray(setlistInfo.sets.set)) {
            setlistInfo.sets.set.forEach(setPart => {
              setPart.song.forEach(song => {
                setlists[index].songs.push(song["@name"])
              });
            });
          } else {
            if (Array.isArray(setlistInfo.sets.set.song)) {
              setlistInfo.sets.set.song.forEach(song => {
                setlists[index].songs.push(song["@name"]);
              });
            } else {
              setlists[index].songs.push(setlistInfo.sets.set.song["@name"])
            }
          }

          // console.log(songs);
        } else {
          setlists[index].songs.push("")
        }
      });

      dispatch({ type: SETLISTS_FETCHED, setlists });
    } catch (error) {
      console.error(error);
    }
  };
}
