"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatFxSelector = undefined;

var _chatStart = require("./chatStart");

var _newsAPI = require("./modules/newsAPI");

var _covid = require("./modules/covid");

var _spotify = require("./modules/spotify");

var _freeAccounts = require("./modules/freeAccounts");

const chatFxSelector = exports.chatFxSelector = chatKeyword => {
  try {
    let _chatKeyword = chatKeyword.replace(/\s/g, '');

    console.log('rcvMsgString', chatKeyword, _chatKeyword);
    let chatFxSelected;
    console.log('in switch case: ', _chatKeyword);

    switch (_chatKeyword) {
      case 'start':
        chatFxSelected = _chatStart.welcomeChat;
        break;

      case 'headlinesind':
        chatFxSelected = _newsAPI.getTopStoriesInd;
        break;

      case 'headlineswld':
        chatFxSelected = _newsAPI.getTopStoriesWld;
        break;

      case 'covid19ind':
        chatFxSelected = _covid.coronaUpdatesIN;
        break;

      case 'covid19wld':
        chatFxSelected = _covid.coronaUpdatesWLD;
        break;

      case 'spotify10ind':
        chatFxSelected = _spotify.spotifyViralInd;
        break;

      case 'spotify10wld':
        chatFxSelected = _spotify.spotifyViralInd;
        break;

      case 'freescreenaccounts':
        chatFxSelected = _freeAccounts.freeAccounts;
        break;

      case 'backtostart':
        chatFxSelected = _chatStart.welcomeChat;
        break;

      default:
        break;
    }

    return chatFxSelected;
  } catch (error) {
    console.log(error);
  }
};