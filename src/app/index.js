process.env['NTBA_FIX_319'] = 1;
import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_TOKEN, TELEGRAM_VALID_FX, TELEGRAM_INVALID_FX } from '../constants';
import { chatFxSelector } from './chatFnSelector';

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

export const startTelegramBot = async (msg) => {
	try {
		bot.onText(/(.+)$/, async (msg) => {
			try {
				//const isBotCmd = 'entities' in msg ? true:false;
				const rcvMsgString = msg.text.replace(/[^\w\s]/gi, '').toLowerCase();

				const _chatFxSelector = await chatFxSelector(rcvMsgString);
				// if (typeof _checkAvailableFx == 'function') {
				const _chatBotReplay = await _chatFxSelector(msg);
				bot.sendMessage(
					msg.chat.id,
					_chatBotReplay.text
						.replace(/(\[[^\][]*]\(http[^()]*\))|[-.+?^$[\](){}\\]/gi, (x, y) => (y ? y : '\\' + x))
						.replace(/[|]/g, '::'),
					_chatBotReplay.extraData
				);
				// } else {
				//   console.log('no function found...');
				// }
			} catch (error) {
				console.log(error);
			}
		});

		bot.on('message', async (msg) => {
			try {
				const rcvMsgString = msg.text.replace(/[^\w\s]/gi, '').toLowerCase();
				const _checkAvailableFx = await chatFxSelector(rcvMsgString);
				if (typeof _checkAvailableFx == 'function')
					bot.sendMessage(
						msg.chat.id,
						rcvMsgString == 'start'
							? `Hi ${msg.chat.first_name}, Please tap on menu board.😊`
							: `I am processing your request, wait...`
					);
				else bot.sendMessage(msg.chat.id, TELEGRAM_INVALID_FX);
			} catch (error) {
				bot.sendMessage(msg.chat.id, error);
			}
		});
	} catch (error) {
		console.log(error);
	}
};
