"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coronaUpdatesWLD = exports.coronaUpdatesIN = undefined;

var _constants = require("../../constants");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const coronaUpdatesIN = exports.coronaUpdatesIN = async msg => {
  try {
    const resCoronaUpdate = await _axios2.default.get(_constants.coronaUpdateIN);
    const totalCases = 'total' in resCoronaUpdate.data ? resCoronaUpdate.data.total : {};
    let stateWise = 'state_wise' in resCoronaUpdate.data ? resCoronaUpdate.data.state_wise : {};
    const onDate = 'lpt' in resCoronaUpdate.data ? resCoronaUpdate.data.lpt : new Date.now();
    stateWise = stateWise.sort(function (a, b) {
      return parseFloat(b.Confirmed) - parseFloat(a.Confirmed);
    });
    let stateDataString = '*State | Confirmed  |  Deaths*';
    stateDataString = `${stateDataString}\n*_Total (IND)_ | ${totalCases.Confirmed} | ${totalCases.Deaths}*`;

    for (const inState of stateWise) {
      stateDataString = `${stateDataString}\n_${inState.State.replace('\n', '').trim()}_ | *${inState.Confirmed}* | ${inState.Deaths}`;
    }

    stateDataString = `${stateDataString}\n\n_${_constants.coronaSlogan}_\nUpdated on ${onDate}`;
    const replayBotPayload = {
      text: stateDataString,
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
    console.error(error);
  }
};

const coronaUpdatesWLD = exports.coronaUpdatesWLD = async msg => {
  try {
    const resCoronaUpdate = await _axios2.default.get(_constants.coronaUpdateGlobeTOI);
    const totalCases = 'total' in resCoronaUpdate.data ? resCoronaUpdate.data.total : {};
    let countryWise = 'country_wise' in resCoronaUpdate.data ? resCoronaUpdate.data.country_wise : {};
    const onDate = 'updated_until' in resCoronaUpdate.data ? resCoronaUpdate.data.updated_until : new Date.now();
    let stateDataString = '*State | Confirmed | Recovered |  Deaths*';
    let TotalWorldDataString = `*_Total (WLD)_ | ${totalCases.Confirmed} | ${totalCases.Recovered} | ${totalCases.Deaths}*`;

    for (const inCountry of countryWise.splice(0, 15)) {
      stateDataString = `${stateDataString}\n_${inCountry.Country.replace('\n', '').trim()}_ | *${inCountry.Confirmed}* | ${inCountry.Recovered} | ${inCountry.Deaths}`;
    }

    stateDataString = `${stateDataString}\n${TotalWorldDataString}\n\n_${_constants.coronaSlogan}_\nUpdated on ${onDate}`;
    console.log(stateDataString);
    const replayBotPayload = {
      text: stateDataString,
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
    console.error(error);
  }
};