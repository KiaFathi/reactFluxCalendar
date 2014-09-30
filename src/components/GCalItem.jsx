'use strict';

var React = require('react');

var GCalPerson = require('./GCalPerson.jsx');
var GCalLocation = require('./GCalLocation.jsx');

var AppActions = require('../actions/AppActions.js');

var GCalItem = React.createClass({
  handleButtonClick: function(){
    AppActions.bookEvent(this.props.itemData);
  },
  render: function(){
    var summary = this.props.itemData.summary;
    var organizer = this.props.itemData.organizer;
    var Attendees = this.props.itemData.attendees.map(function(val, index){
      if(index !== 0 ){
        return (
          <GCalPerson
            key={index}
            category='Attendee'
            displayName={val.displayName}
            email={val.email}
          />
        );
      } 
    });
    return(
      <div>
        <strong>{summary}</strong>
        <GCalLocation 
          displayName ={this.props.itemData.attendees[0].displayName}
        />
        <GCalPerson 
          category="Organizer" 
          displayName={organizer.displayName}
          email={organizer.email}
        />
        <button onClick={this.handleButtonClick}>Book this event!</button>
      </div>
    );
  }
});

module.exports = GCalItem;