import React from "react";
import loginSVG from "../log_in.svg";
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

  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const { dispatch, params } = this.props;
    const { accessToken, refreshToken } = params;
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(getMyInfo());
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Artist Name</ControlLabel>{" "}
          <FormControl type="text" placeholder="Metallica" />
        </FormGroup>{" "}
        <Button type="submit">Send invitation</Button>
      </Form>
    );
  }
}
