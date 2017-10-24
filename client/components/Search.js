import React from "react";
import loginSVG from "../log_in.svg";
import * as actions from "../actions/actions";
import * as selectors from "../reducers";
import { Link } from "react-router";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Button,
  Form
} from "react-bootstrap";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.dispatch(actions.searchByArtistName(this.state.value));
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Artist Name</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Metallica"
          />
        </FormGroup>{" "}
        <Button type="submit">
          <Link to={"/setlist/"} activeClassName="active">
            Send invitation
          </Link>
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    setlists: selectors.searchByArtistName(state)
  };
}
