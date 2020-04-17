"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.freeAccounts = undefined;

var _constants = require("../../constants");

const freeAccounts = exports.freeAccounts = async msg => {
  console.log(msg);

  try {
    console.log('msg.chat.first_name', msg.chat.first_name);
    const __text = `All these accounts are free for you, Please choose in menu board. 😊`;
    console.log('text', __text);
    const replayBotPayload = {
      text: __text,
      noWebpage: true,
      extraData: {
        reply_markup: {
          keyboard: _constants.TELEGRAM_ACCOUNT_KEYBORD,
          resize_keyboard: true
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