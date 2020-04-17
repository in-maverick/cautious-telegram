"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopStoriesWld = exports.getTopStoriesInd = undefined;

var _utils = require("../../utils");

var _constants = require("../../constants");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTopStoriesInd = exports.getTopStoriesInd = async msg => {
  console.log(msg);

  try {
    console.log('msg.chat.first_name', msg.chat.first_name);
    const greet = await (0, _utils.greeting)(msg.chat.first_name); //

    const newsTopHeads = `${_constants.newAPI}top-headlines?sources=the-hindu&sortBy=popularity&apiKey=${_constants.newsAPIKey}`; // const newsTopHeads = `${newAPI}top-headlines?country=in&sortBy=popularity&apiKey=${newsAPIKey}`;

    const resNewsTop = await _axios2.default.get(newsTopHeads);
    const articlesArr = 'articles' in resNewsTop.data ? resNewsTop.data.articles : {};
    let count = 0;
    let newsLines = '';
    let dateString = '';

    for (const article of articlesArr.splice(0, 10)) {
      dateString = 'publishedAt' in article ? article.publishedAt : Date.now();
      let dateTime = new Date().toString(dateString).split(' ');
      dateString = `${dateTime[0]}, ${dateTime[1]} ${dateTime[2]} ${dateTime[3]}`;
      newsLines = `👉 *Headline No ${++count}* \n _${article.title}_ \n${article.description}\n[Read more](${article.url})\n\n${newsLines}`;
    }

    const text = newsLines;
    console.log('text', text);
    const replayBotPayload = {
      text: newsLines,
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

const getTopStoriesWld = exports.getTopStoriesWld = async msg => {
  console.log(msg);

  try {
    console.log('msg.chat.first_name', msg.chat.first_name);
    const greet = await (0, _utils.greeting)(msg.chat.first_name);
    const newsTopHeads = `${_constants.newAPI}top-headlines?sources=google-news&sortBy=popularity&apiKey=${_constants.newsAPIKey}`;
    const resNewsTop = await _axios2.default.get(newsTopHeads);
    const articlesArr = 'articles' in resNewsTop.data ? resNewsTop.data.articles : {};
    let count = 0;
    let newsLines = '';
    let dateString = '';

    for (const article of articlesArr.splice(0, 10)) {
      dateString = 'publishedAt' in article ? article.publishedAt : Date.now();
      let dateTime = new Date().toString(dateString).split(' ');
      dateString = `${dateTime[0]}, ${dateTime[1]} ${dateTime[2]} ${dateTime[3]}`;
      newsLines = `👉 *Headline No ${++count}* \n _${article.title}_ \n${article.description}\n[Read more](${article.url})\n\n${newsLines}`;
    }

    const text = newsLines;
    console.log('text', text);
    const replayBotPayload = {
      text: newsLines,
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