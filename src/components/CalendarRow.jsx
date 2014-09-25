'use strict';
var React = require('react');

var CalendarRow = React.createClass({
  render: function(){
    return (
      <tr> 
          <td>{this.props.days[0]}</td>
          <td>{this.props.days[1]}</td>
          <td>{this.props.days[2]}</td>
          <td>{this.props.days[3]}</td>
          <td>{this.props.days[4]}</td>
          <td>{this.props.days[5]}</td>
          <td>{this.props.days[6]}</td>
      </tr>
    );
  }
});



module.exports = CalendarRow;