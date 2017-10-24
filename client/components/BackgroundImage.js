import React, { Component } from "react";

/**
 * Main app component
 * Has a header and then render's the page content
 */
export default class SpotifyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null
    };
  }
  componentDidMount() {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    this.setState({ x: x, y: y });
  }

  render() {
    // injected via react router
    const { children } = this.props;
    return (
      <div>
        <img
          className="bg"
          src={
            "https://source.unsplash.com/" +
            this.state.x +
            "x" +
            this.state.y +
            "/?music"
          }
        >
          {" "}
          {children}{" "}
        </img>
      </div>
    );
  }
}
