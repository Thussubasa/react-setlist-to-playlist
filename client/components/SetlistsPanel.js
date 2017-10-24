import React, { Component } from "react";
import { PanelGroup, Panel } from "react-bootstrap";
import Songs from "./Songs";

export default class SetlistsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1"
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  getSetlists() {
    return this.props.setlists.map(_setlist => {
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
  }

  render() {
    return (
      <div>
        <div>{this.state.activeKey}</div>
        {this.getSetlists()}{" "}
      </div>
    );
  }
}
