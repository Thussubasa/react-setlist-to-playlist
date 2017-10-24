import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import * as selectors from "../reducers";
import ListView from "./SetlistsPanel";

class SetlistsScreen extends Component {
  renderLoading() {
    return <p>Loading...</p>;
  }

  render() {
    if (!this.state.setlists) return this.renderLoading();
    return <ListView setlists={this.state.setlists} />;
  }
}

export default connect(state => state)(SetlistsScreen);
