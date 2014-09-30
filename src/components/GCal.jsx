'use strict';
var React = require('react');

var GCalItem = require('./GCalItem.jsx');

var GCal = React.createClass({
  render: function(){
    var calendarName = this.props.calendarData.summary
    var GCalItems = this.props.calendarData.items.map(function(value, index){
      if(value.attendees.length < 100){
        return (
          <GCalItem itemData={value} key={index}/>
        );        
      }
    });
    return (
      <div>
        <strong>Calendar Name: {calendarName}</strong>
        {GCalItems}
      </div>
      );
  }
});

module.exports = GCal;