"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTelegramBot = undefined;

var _nodeTelegramBotApi = require("node-telegram-bot-api");

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _constants = require("../constants");

var _chatFnSelector = require("./chatFnSelector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env['NTBA_FIX_319'] = 1;
const bot = new _nodeTelegramBotApi2.default(_constants.TELEGRAM_TOKEN, {
  polling: true
});

const startTelegramBot = exports.startTelegramBot = async msg => {
  try {
    bot.onText(/(.+)$/, async msg => {
      try {
        //const isBotCmd = 'entities' in msg ? true:false;
        const rcvMsgString = msg.text.replace(/[^\w\s]/gi, '').toLowerCase();

        const _chatFxSelector = await (0, _chatFnSelector.chatFxSelector)(rcvMsgString); // if (typeof _checkAvailableFx == 'function') {


        const _chatBotReplay = await _chatFxSelector(msg);

        bot.sendMessage(msg.chat.id, _chatBotReplay.text.replace(/(\[[^\][]*]\(http[^()]*\))|[-.+?^$[\](){}\\]/gi, (x, y) => y ? y : '\\' + x).replace(/[|]/g, '::'), _chatBotReplay.extraData); // } else {
        //   console.log('no function found...');
        // }
      } catch (error) {
        console.log(error);
      }
    });
    bot.on('message', async msg => {
      try {
        const rcvMsgString = msg.text.replace(/[^\w\s]/gi, '').toLowerCase();

        const _checkAvailableFx = await (0, _chatFnSelector.chatFxSelector)(rcvMsgString);

        if (typeof _checkAvailableFx == 'function') bot.sendMessage(msg.chat.id, rcvMsgString == 'start' ? `Hi ${msg.chat.first_name}, Please tap on menu board.😊` : `I am processing your request, wait...`);else bot.sendMessage(msg.chat.id, _constants.TELEGRAM_INVALID_FX);
      } catch (error) {
        bot.sendMessage(msg.chat.id, error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};