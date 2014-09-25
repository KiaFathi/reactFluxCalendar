'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _data = {
  text: 'HI!',
  calendarData: {
    month: 'September',
    year: '100ADBCEFG',
    days: [
      [,,,,,,1],
      [2,3,4,5,6,7,8],
      [9,10,11,12,13,14,15],
      [16,17,18,19,20,21,22],
      [23,24,25,26,27,28, 29],
      [30,31]
      ]
  }
};

console.log(_data);

var AppStore = merge(EventEmitter.prototype, {
  
  getData: function(){
    return _data;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }


});

AppDispatcher.register(function(payload){
  var action = payload.action;
  var todos = _data.todos;

  if(action.actionType === AppConstants.EXAMPLE_CONSTANT){
    var text = action.text + ' to Dispatcher to Store and back';
    _data.message = text;
  }

  AppStore.emitChange();

});



module.exports = AppStore;