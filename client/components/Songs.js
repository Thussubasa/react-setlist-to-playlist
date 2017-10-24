import React, { Component } from "react";

export default class Songs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        songs: this.props.setlist
      };
    }
  
    render() {
      const songs = this.props.songs.map((song, index) => (
        <li key={index}>{song}</li>
      ));
      return <ul>{songs}</ul>;
    }
  }