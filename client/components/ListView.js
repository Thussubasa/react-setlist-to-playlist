import React, { Component } from "react";
import { PanelGroup, Panel } from "react-bootstrap";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.setlist
    };
  }


  render() {
    return this.props.songs.map((song, index) => {
      return (
        <ul>
          <li key={index}>{song}</li>
        </ul>
      );
    });
  }
}

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1"
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const setlists = this.props.setlists.map(_setlist => {
      return (
        <PanelGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
        >
          <Panel setlist={_setlist} header={_setlist.title} eventKey="1">
            <Songs songs={_setlist.songs} />
          </Panel>
        </PanelGroup>
      );
    });

    return <div>{setlists} </div>;
  }

  renderRowById(rowId) {
    return (
      <li key={rowId}>
        {this.props.renderRow(_.get(this.props.rowsById, rowId))}
      </li>
    );
  }
}
