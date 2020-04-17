"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = exports.wishMe = exports.delay = exports.normalizePort = exports.log = exports.reportsList = undefined;

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _tracer = require("tracer");

var _tracer2 = _interopRequireDefault(_tracer);

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reportsList = exports.reportsList = Object.entries(_constants.REPORTS_CONFIG).map(([key, value]) => {
  console.log(value.name, key);
  const report = {
    text: value.name,
    value: key
  };
  return report;
});

const log = exports.log = (() => {
  const logger = _tracer2.default.colorConsole();

  logger.requestLogger = (0, _morgan2.default)('dev');
  return logger;
})();

const normalizePort = exports.normalizePort = val => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const delay = exports.delay = time => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, time);
});

const wishMe = exports.wishMe = async () => {
  const today = new Date();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const hr = today.getHours();
  let wishingText = '';

  if (hr >= 0 && hr < 12) {
    wishingText = 'Good Morning!';
  } else if (hr == 12) {
    wishingText = 'Good Noon!';
  } else if (hr >= 12 && hr <= 17) {
    wishingText = 'Good Afternoon!';
  } else {
    wishingText = 'Good Evening!';
  }

  return wishingText;
};

const greeting = exports.greeting = async userName => {
  return `Bingo, ${userName}, I am ready with interest below 😍`;
};