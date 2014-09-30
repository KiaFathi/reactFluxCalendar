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
    year: '2014',
    days: [
      ['',1,2,3,4,5,6],
      [7,8,9,10,11,12,13],
      [14,15,16,17,18,19,20],
      [21,22,23,24,25,26,27],
      [28,29,30, '', '', '', '']
      ]
  }  
};

var _gCalData = {
 "kind": "calendar#events",
 "etag": "\"1411951610295000\"",
 "summary": "rohan.pethiyagoda@hackreactor.com",
 "updated": "2014-09-29T00:46:50.295Z",
 "timeZone": "America/Los_Angeles",
 "accessRole": "writer",
 "defaultReminders": [],
 "nextPageToken": "CjkKK3QxY3ZobGF1ZzFobjAxb2JsbmU3cTJrazU0XzIwMTQwNTI3VDE5MzAwMFoYASCAgIDvpOW2xRQaDQgAEgAY2OWv0ZmFwQI=",
 "items": [
  {
    "kind": "calendar#event",
    "etag": "\"2808494412708000\"",
    "id": "kr0vfsi1td6i2movnqk61g0lno",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=a3IwdmZzaTF0ZDZpMm1vdm5xazYxZzBsbm8gcm9oYW4ucGV0aGl5YWdvZGFAaGFja3JlYWN0b3IuY29t",
    "created": "2014-06-28T22:51:05.000Z",
    "updated": "2014-07-01T20:40:06.354Z",
    "summary": "HIR & Shep Onboarding",
    "description": "Owner: Janas Page & Ryan Stellar\n\nDeliverable: On boarding of HIRs and Sheps from HR12/13\n\nTopics:\n1. Google Apps accounts\n2. IT stuff\n3. Review of HIR wiki \n4. The remainder of HIR.\n\nCurrent HIRs: Optional\n\nCurrent Shepherds: Optional",
    "location": "Where: Presentation Area (6)",
    "creator": {
     "email": "stellar@hackreactor.com",
     "displayName": "Ryan Stellar"
    },
    "organizer": {
     "email": "stellar@hackreactor.com",
     "displayName": "Ryan Stellar"
    },
    "start": {
     "dateTime": "2014-06-30T15:30:00-07:00"
    },
    "end": {
     "dateTime": "2014-06-30T17:00:00-07:00"
    },
    "iCalUID": "kr0vfsi1td6i2movnqk61g0lno@google.com",
    "sequence": 0,
    "attendees": [
        {
          "email": "hackreactor.com_2d35363639313230322d393732@resource.calendar.google.com",
          "displayName": "Where: Presentation Area (6)",
          "resource": true,
          "responseStatus": "accepted"
        },
        {
          "email": "emily.y.dong@gmail.com",
          "displayName": "Emily Dong",
          "responseStatus": "accepted"
        },
        {
          "email": "katie.hempenius@hackreactor.com",
          "displayName": "Katie Hempenius",
          "responseStatus": "needsAction"
        },
        {
          "email": "sarith21@gmail.com",
          "displayName": "Rohan Pethiyagoda",
          "responseStatus": "declined"
        },
        {
          "email": "syeoryn@gmail.com",
          "displayName": "Drew Cuthbertson",
          "responseStatus": "accepted"
        },
        {
          "email": "acjones617@gmail.com",
          "displayName": "Andrew Jones",
          "responseStatus": "accepted"
        },
        {
          "email": "jrhdoty@gmail.com",
          "displayName": "John Doty",
          "responseStatus": "accepted"
        },
        {
          "email": "aaromp@gmail.com",
          "displayName": "Aaron Ward",
          "responseStatus": "accepted"
        },
        {
          "email": "zmp@umich.edu",
          "responseStatus": "needsAction"
        },
        {
          "email": "jonathan.reem@gmail.com",
          "displayName": "Jonathan Reem",
          "responseStatus": "accepted"
        },
        {
          "email": "dezekielj@gmail.com",
          "responseStatus": "accepted"
        },
        {
          "email": "rohan.pethiyagoda@hackreactor.com",
          "displayName": "Rohan Pethiyagoda",
          "self": true,
          "responseStatus": "accepted"
        },
        {
          "email": "hir@hackreactor.com",
          "displayName": "Hacker in Residence",
          "responseStatus": "needsAction"
        },
        {
          "email": "rajatkhanna82@gmail.com",
          "displayName": "Rajat Khanna",
          "responseStatus": "needsAction"
        },
        {
          "email": "mcreinhard@gmail.com",
          "displayName": "Michael Reinhard",
          "responseStatus": "accepted"
        },
        {
          "email": "veronica@hackreactor.com",
          "displayName": "Veronica Moreno",
          "responseStatus": "accepted"
        },
        {
          "email": "chris.oliver@hackreactor.com",
          "displayName": "Chris Oliver",
          "responseStatus": "needsAction"
        },
        {
          "email": "keiwi.g@gmail.com",
          "displayName": "Keith Grout",
          "responseStatus": "accepted"
        },
        {
          "email": "stellar@hackreactor.com",
          "displayName": "Ryan Stellar",
          "organizer": true,
          "responseStatus": "accepted"
        },
        {
          "email": "jimmy.tsao@gmail.com",
          "displayName": "Jimmy Tsao",
          "responseStatus": "accepted"
        },
        {
          "email": "luis@hackreactor.com",
          "displayName": "Luis Guzman",
          "responseStatus": "needsAction"
        }
      ],
      "hangoutLink": "https://plus.google.com/hangouts/_/calendar/c3RlbGxhckBoYWNrcmVhY3Rvci5jb20.kr0vfsi1td6i2movnqk61g0lno",
      "reminders": {
        "useDefault": true
      }
    }
  ]
};



var AppStore = merge(EventEmitter.prototype, {
  
  getData: function(){
    return _data;
  },

  getGCalData: function(){
    return _gCalData;
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

  if(action.actionType === AppConstants.EXAMPLE_CONSTANT){
    var text = action.text + ' to Dispatcher to Store and back';
    _data.message = text;
  }

  else if(action.actionType === AppConstants.INCREMENT_DAY){
    var week = action.week;
    var day = action.day;
    _data.calendarData.days[week][day]++;
  }

  else if(action.actionType === AppConstants.BOOK_EVENT){
    var eventData = action.eventData;
    console.log(eventData);
  }

  else if(action.actionType === AppConstants.GCAL_SERVER_DATA){
    console.log('ACTION TYPE!?!?');
    var _gCalData = action.gCalData;
    console.log('HEARD ACTIONTYPE!!');
    console.log(action.gCalData);
    console.log('DATA_____________________________________________________________________________________________________________________________________________________');
  }

  AppStore.emitChange();

});



module.exports = AppStore;