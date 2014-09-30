'use strict';

var React = require('react');

//Flux Architecture Components
var AppStore = require('../stores/AppStore');

//Components
var Calendar = require('../components/Calendar.jsx');
var GCal = require('../components/GCal.jsx');

function getAppState(){
  return AppStore.getData()
};

function getGCalData(){
  return AppStore.getGCalData();
}

var APP = React.createClass({
  getInitialState: function(){
    return getGCalData();
  },

  _onChange: function(){
    this.setState(getAppState());
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
        <GCal calendarData ={this.state}/> 
      </div>
      );
  }

})

module.exports = APP;