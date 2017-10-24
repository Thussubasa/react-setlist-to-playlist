import React, { Component } from "react";
import { Grid, Row, Col, Panel, Jumbotron } from "react-bootstrap";
import { Unsplashed } from 'react-unsplash-container'
// import { Unsplashed } from "react-unsplash-container";
/**
 * Main app component
 * Has a header and then render's the page content
 */

export default class SpotifyLogin extends Component {
  render() {
    // injected via react router
    const { children } = this.props;
    return (
      <Unsplashed keywords={["music", "concert"]}>
        <Grid>
          <Row className="show-grid">
            <Panel header="SetList To Playlist">{children} </Panel>
          </Row>
        </Grid>
      </Unsplashed>
    );
  }
}
