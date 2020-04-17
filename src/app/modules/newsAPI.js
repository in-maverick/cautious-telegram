import { greeting } from '../../utils';
import { newAPI, newsAPIKey, TELEGRAM_WELCOME_KEYBORD } from '../../constants';
import Axios from 'axios';

export const getTopStoriesInd = async (msg) => {
	console.log(msg);
	try {
		console.log('msg.chat.first_name', msg.chat.first_name);
		const greet = await greeting(msg.chat.first_name); //
		const newsTopHeads = `${newAPI}top-headlines?sources=the-hindu&sortBy=popularity&apiKey=${newsAPIKey}`;
		// const newsTopHeads = `${newAPI}top-headlines?country=in&sortBy=popularity&apiKey=${newsAPIKey}`;

		const resNewsTop = await Axios.get(newsTopHeads);

		const articlesArr = 'articles' in resNewsTop.data ? resNewsTop.data.articles : {};

		let count = 0;
		let newsLines = '';
		let dateString = '';
		for (const article of articlesArr.splice(0, 10)) {
			dateString = 'publishedAt' in article ? article.publishedAt : Date.now();
			let dateTime = new Date().toString(dateString).split(' ');
			dateString = `${dateTime[0]}, ${dateTime[1]} ${dateTime[2]} ${dateTime[3]}`;

			newsLines = `👉 *Headline No ${++count}* \n _${article.title}_ \n${article.description}\n[Read more](${
				article.url
			})\n\n${newsLines}`;
		}

		const text = newsLines;
		console.log('text', text);
		const replayBotPayload = {
			text: newsLines,
			noWebpage: true,
			extraData: {
				reply_markup: {
					keyboard: TELEGRAM_WELCOME_KEYBORD,
				},
				parse_mode: 'MarkdownV2',
				disable_web_page_preview: true,
			},
		};
		return replayBotPayload;
	} catch (error) {
		console.log(error);
	}
};

export const getTopStoriesWld = async (msg) => {
	console.log(msg);
	try {
		console.log('msg.chat.first_name', msg.chat.first_name);
		const greet = await greeting(msg.chat.first_name);

		const newsTopHeads = `${newAPI}top-headlines?sources=google-news&sortBy=popularity&apiKey=${newsAPIKey}`;

		const resNewsTop = await Axios.get(newsTopHeads);

		const articlesArr = 'articles' in resNewsTop.data ? resNewsTop.data.articles : {};

		let count = 0;
		let newsLines = '';
		let dateString = '';
		for (const article of articlesArr.splice(0, 10)) {
			dateString = 'publishedAt' in article ? article.publishedAt : Date.now();
			let dateTime = new Date().toString(dateString).split(' ');
			dateString = `${dateTime[0]}, ${dateTime[1]} ${dateTime[2]} ${dateTime[3]}`;

			newsLines = `👉 *Headline No ${++count}* \n _${article.title}_ \n${article.description}\n[Read more](${
				article.url
			})\n\n${newsLines}`;
		}

		const text = newsLines;
		console.log('text', text);
		const replayBotPayload = {
			text: newsLines,
			noWebpage: true,
			extraData: {
				reply_markup: {
					keyboard: TELEGRAM_WELCOME_KEYBORD,
				},
				parse_mode: 'MarkdownV2',
				disable_web_page_preview: true,
			},
		};
		return replayBotPayload;
	} catch (error) {
		console.log(error);
	}
};
