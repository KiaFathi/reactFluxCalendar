'use strict';
var React = require('react');

var CalendarRow = require('./CalendarRow.jsx');

var Calendar = React.createClass({
  render: function(){
    var CalendarRows = this.props.calendarData.days.map(function(val, index){
      return (
        <CalendarRow key={index} days={val} />
        );
    });
    var Year = this.props.calendarData.year;
    var Month = this.props.calendarData.month;
    return (
      <div>
        <strong>{Month}, {Year}</strong> 
        <table>
          <CalendarRow 
            days={['Sun','Mon','Tues','Wed','Thu','Fri', 'Sat']}
          />
          {CalendarRows}
        </table>
      </div>
      );
  }
});


module.exports = Calendar;