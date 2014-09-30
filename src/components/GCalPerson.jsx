'use strict';
var React = require('react');

var GCalPerson = React.createClass({
  render: function(){
    var email = 'mailto:' + this.props.email;
    return (
      <div>
        <p><b>{this.props.category}: </b><a href={email}>{this.props.displayName}</a></p>
      </div>
    );
  }
});

module.exports = GCalPerson;