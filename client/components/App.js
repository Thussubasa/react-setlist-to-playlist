import React, { Component } from "react";
import { Grid, Row, Col, Panel, Jumbotron } from "react-bootstrap";
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
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4} />
              <Col xs={6} md={4}>
                <Panel header="SetList To Playlist">{children} </Panel>
              </Col>
              <Col xsHidden md={4} />
            </Row>
          </Grid>
    );
  }
}

{
  /* <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4} />
          <Col xs={6} md={4}>
            <Panel header="SetList To Playlist">Panel content</Panel>
          </Col>
          <Col xsHidden md={4} />
        </Row>
      </Grid> */
}
