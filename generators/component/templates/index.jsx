import React, { Component } from "react";
<% if (container) { -%>
import { connect } from "react-redux";
<% } -%>
import PropTypes from "prop-types";

import "./styles.scss";

<% if (!functional) { -%>
class <%= classname %> extends Component {
<% if (container) { -%>
  componentDidMount() {
    this.props.onLoad();
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
<% } -%>

  render() {
    return (
      <div className="<%= classname %>">This is a <%= classname %>.</div>
    );
  }
}
<% } -%>
<% if (functional) { -%>
const <%= classname %> = () => (
  <div className="<%= classname %>">This is a <%= classname %>.</div>
);
<% } -%>

<%= classname %>.propTypes = {};

<% if (container) { -%>
const mapDispatchToProps = dispatch => ({
  onUnload: () => {
    dispatch(() => {};
  },
  onLoad: () => {
    dispatch(() => {});
  },
});

const mapStateToProps = state => ({});

<% } -%>
<% if (!container) { -%>
export default <%= classname %>;
<% } -%>
<% if (container) { -%>
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(<%= classname %>);
<% } -%>
