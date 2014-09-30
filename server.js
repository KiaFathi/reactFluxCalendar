'use strict';

var gcal = require('google-calendar');
var request = require('request');
var TokenCache = require('google-oauth-jwt').TokenCache;
var tokens = new TokenCache();

var onehour = 1000*60*60;
var oneday = onehour*24;
var oneweek = 7 * oneday;

var AppActions = require('./src/actions/AppActions.js');

//returns all events for two months. We can assume this is the format we'll get our data back in
var getFreeBusy = function (callback) { //callback takes (err, body, res) params
  var now = Date.now();
  var twoMonths = new Date(now + oneweek*8);

  tokens.get({
      // use the email address of the NetSense google service account, as seen in the google dev API console
        email: '376149391947-apghgcuc2q6okrp274dpiarib7ikcrbg@developer.gserviceaccount.com',
        // key: (process.env.GOOGLE_PRIV_KEY).replace(/\\n/g, '\n'),//////
        keyFile: './key-file.pem',
        // specify the scopes you wish to access
        scopes: ['https://www.googleapis.com/auth/calendar']
      },  function (err, token) {

            var google_calendar = new gcal.GoogleCalendar(token);
          
            var headers = {
              Authorization: 'Bearer ' + token,
              "Content-Type": 'application/json'
            };
          
            var options = {
              url: 'https://www.googleapis.com/calendar/v3/calendars/Rohan.pethiyagoda%40HackReactor.com/events',
              headers: headers,
              maxResults: 50,
              singleEvents: true,
              timeMax: twoMonths.toISOString(),
              timeMin: new Date().toISOString()
            };

            request.get(options, callback);
          }
    );
};

getFreeBusy(function(err, res, body){
  AppActions.gCalServerData(body);
});
