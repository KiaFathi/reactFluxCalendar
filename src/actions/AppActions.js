'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  exampleAction: function(text){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EXAMPLE_CONSTANT,
      text: text + ' to Actions'
    });
  },

  incrementDay: function(week, day){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREMENT_DAY,
      week: week,
      day: day
    });
  },

  bookEvent: function(event){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.BOOK_EVENT,
      eventData: event
    });
  },

  gCalServerData: function(data){
    console.log('Hitting App Actions');
    console.log('data in app actions?', !!data);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GCAL_SERVER_DATA,
      gCalData: data,
    });
  }
};

module.exports = AppActions;