import { welcomeChat } from './chatStart';
import { getTopStoriesInd, getTopStoriesWld } from './modules/newsAPI';
import { coronaUpdatesIN, coronaUpdatesWLD } from './modules/covid';
import { spotifyViralInd } from './modules/spotify';
import { freeAccounts } from './modules/freeAccounts';

export const chatFxSelector = chatKeyword => {
  try {
    let _chatKeyword = chatKeyword.replace(/\s/g, '');
    console.log('rcvMsgString', chatKeyword, _chatKeyword);
    let chatFxSelected;
    console.log('in switch case: ', _chatKeyword);
    switch (_chatKeyword) {
      case 'start':
        chatFxSelected = welcomeChat;
        break;

      case 'headlinesind':
        chatFxSelected = getTopStoriesInd;
        break;

      case 'headlineswld':
        chatFxSelected = getTopStoriesWld;
        break;
      case 'covid19ind':
        chatFxSelected = coronaUpdatesIN;
        break;
      case 'covid19wld':
        chatFxSelected = coronaUpdatesWLD;
        break;
      case 'spotify10ind':
        chatFxSelected = spotifyViralInd;
        break;
      case 'spotify10wld':
        chatFxSelected = spotifyViralInd;
        break;
      case 'freescreenaccounts':
        chatFxSelected = freeAccounts;
        break;
      case 'backtostart':
        chatFxSelected = welcomeChat;
        break;

      default:
        break;
    }
    return chatFxSelected;
  } catch (error) {
    console.log(error);
  }
};
