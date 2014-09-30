'use strict';
var React = require('react');
var AppActions = require('../actions/AppActions.js');

var CalendarDay = React.createClass({
  handleClick: function(){
    console.log('Hi mom!');
    AppActions.incrementDay(this.props.week, this.props.key);
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