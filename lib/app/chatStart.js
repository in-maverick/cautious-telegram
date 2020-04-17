"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcomeChat = undefined;

var _constants = require("../constants");

const welcomeChat = exports.welcomeChat = async msg => {
  const WECOME_TEXT = `What would you like to get today 👇🏼`;
  const replayBotPayload = {
    text: WECOME_TEXT,
    extraData: {
      reply_markup: {
        keyboard: _constants.TELEGRAM_WELCOME_KEYBORD,
        resize_keyboard: true
      }
    }
  };
  return replayBotPayload;
};