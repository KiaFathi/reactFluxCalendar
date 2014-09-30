 'use strict';
var React = require('react');

var CalendarWeek = require('./CalendarWeek.jsx');

var Calendar = React.createClass({
  render: function(){
    var Year = this.props.calendarData.year;
    var Month = this.props.calendarData.month;
    var Days = this.props.calendarData.days;
    var CalendarWeeks = Days.map(function(val, index){
      return (
        <CalendarWeek key={index} days={val} />
        );
    });
    return (
      <div>
        <strong>{Month}, {Year}</strong> 
        <table>
          <CalendarWeek
            days={['Sun','Mon','Tue','Wed','Thu','Fri', 'Sat']}
          />
          {CalendarWeeks}
        </table>
      </div>
      );
  }
});


module.exports = Calendar;