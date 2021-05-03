/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';

process.env.TZ = 'America/Los_Angeles';

const Alexa = require('ask-sdk-v1adapter');
const hf = require('hanfordfriday');

const VOICE_ANSWERS = {
  'near': "This Friday would be a Hanford day off.",
  'today': "Today is a Hanford Friday",
  'recent': "The past Friday was a Hanford Friday.",
  'pending': "This week is not a Hanford Friday week.",
  'unknown': "Sorry, calendar information has not been configured for this year."
};

const SITE_ANSWERS = {
    'near': "Soon.",
    'today': "Yes.",
    'recent': "It was.",
    'pending': "Not this week!",
    'unknown': "PC LOAD LEGAL"
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetStatus');
  },
  'HanfordFriday': function () {
    this.emit('GetStatus');
  },
  'GetStatus': function () {
    let k = hf.statusForTime(Date.now()).info;
    this.emit(':tellWithCard', VOICE_ANSWERS[k], "Is it Hanford Friday?", SITE_ANSWERS[k]);
  }
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
