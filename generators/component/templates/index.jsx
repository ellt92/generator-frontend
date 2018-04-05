import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

<% if (!functional) { -%>
class <%= classname %> extends Component {
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

<%= classname %>.propTypes = {
};

export default <%= classname %>;
