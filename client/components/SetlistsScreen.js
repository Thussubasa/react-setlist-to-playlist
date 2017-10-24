import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import * as selectors from "../reducers";
import ListView from "./ListView";

/**
 * Our login page
 * Has a login button that hit's the login url
 */
class SetlistsScreen extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getSetlistsByArtistName("Blind Guardian"));
  }

  render() {
    if (!this.props.setlists) return this.renderLoading();
    return <ListView setlists={this.props.setlists} />;
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

}

function mapStateToProps(state) {
  return {
    setlists: selectors.getSetlistsByArtistName(state),
  };
}
export default connect(mapStateToProps)(SetlistsScreen);
