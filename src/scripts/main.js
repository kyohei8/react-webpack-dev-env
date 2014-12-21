/*** @jsx React.DOM */
'use strict';

var React = require('react');
require('../styles/main.styl');

var Timer = require('./modules/timer');
var mount = document.getElementById('example');

var HelloMessage = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
        <Timer />
      </div>
    );
  }
});

React.render(<HelloMessage name="my project" />,mount);
