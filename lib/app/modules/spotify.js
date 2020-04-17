"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spotifyViralInd = undefined;

var _constants = require("../../constants");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const spotifyViralInd = exports.spotifyViralInd = async msg => {
  console.log(msg);

  try {
    const msgStringRcv = msg.text.replace(/[^\w\s]/gi, '').toLowerCase();
    if (msgStringRcv == 'spotify10ind') console.log('msg.chat.first_name', msg.chat.first_name);
    let trackString = '';
    const responseData = await _axios2.default.get(msgStringRcv == 'spotify10ind' ? _constants.SPOTIFY_IN_VIRAL : _constants.SPOTIFY_GLOBAL_VIRAL);
    let viralTrackArr = responseData.data.split('\n');
    viralTrackArr = viralTrackArr.splice(2, 11);

    for (const key in viralTrackArr) {
      if (viralTrackArr.hasOwnProperty(key)) {
        console.log(viralTrackArr[key]);
        let viralTrackSplit = viralTrackArr[key].split(',');
        trackString = `*Track No. ${viralTrackSplit[0]}* ➢ ${viralTrackSplit[1]} ( ${viralTrackSplit[2]} )\n 🎧 _[Listen Track](${viralTrackSplit[4]}) _ \n\n${trackString}`;
      }
    } //console.log(trackString);


    const replayBotPayload = {
      text: trackString,
      noWebpage: true,
      extraData: {
        reply_markup: {
          keyboard: _constants.TELEGRAM_WELCOME_KEYBORD
        },
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true
      }
    };
    return replayBotPayload;
  } catch (error) {
    console.log(error);
  }
};