# Setlist-To-Playlist

Create Spotify playlists using setlist.fm api

## Running

The first thing you'll need to do is set your applications client id, client
secret, and callback url. You can do this via the environment variables
`client_id`, `client_secret`, and `redirect_uri`. Or by typing them into the
code in `server/routes.js`. Fun tip: because we're using [Better NPM Run][bnr],
you can set these in your `package.json` - head over there to see an example.

There are three scripts - `start`, `dev`, and `build`.

~~~bash
$ cd server
$ node APIServer.js
~~~

To run the production bundle:

~~~bash
$ npm run build
$ npm start
~~~

To run in dev mode (with hot reloading, and un-minified source maps):

~~~bash
$ npm run dev
~~~
```

### TODO

- Create Playlist in Spotify
- Implement tests with karma
- Styling and UI improvements
