import { TELEGRAM_WELCOME_KEYBORD } from '../constants';
export const welcomeChat = async (msg) => {
	const WECOME_TEXT = `What would you like to get today 👇🏼`;
	const replayBotPayload = {
		text: WECOME_TEXT,
		extraData: {
			reply_markup: {
				keyboard: TELEGRAM_WELCOME_KEYBORD,
				resize_keyboard: true,
			},
		},
	};

	return replayBotPayload;
};
