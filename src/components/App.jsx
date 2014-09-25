'use strict';

var React = require('react');

//Flux Architecture Components
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

function getAppState(){
  return AppStore.getData()
};

var APP = React.createClass({
  getInitialState: function(){
    return getAppState();
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
        APP
      </div>
      );
  }

})

module.exports = APP;