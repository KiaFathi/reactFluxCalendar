'use strict';
var React = require('react');

var CalendarDay = React.createClass({
  handleClick: function(){
    alert('HI mom!');
  },
  render: function(){
    var day = this.props.day;
    if(typeof day === 'string'){
      return (
        <p>{day}</p>
        );
    } else {
      return (
        <div>
          <p>Open Spots</p>
          <button onClick={this.handleClick}>{day}</button>
        </div>
        );      
    }
  }
});

module.exports = CalendarDay