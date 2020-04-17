export const SPOTIFY_GLOBAL_VIRAL = 'https://spotifycharts.com/regional/global/daily/latest/download';

export const SPOTIFY_IN_VIRAL = 'https://spotifycharts.com/viral/in/daily/latest/download';

export const newsAPIKey = '3f66d409aebf4933bff2ccee8d793cd9';
export const newAPI = 'http://newsapi.org/v2/';

export const TELEGRAM_TOKEN = '1037970064:AAE7dnFvNsM9tVzyLRxuBwb3CNa88Z0XDfY';

export const coronaUpdateIN = 'https://toibnews.timesofindia.indiatimes.com/ncov19/india_states_data.json';

export const coronaUpdateGlobeWHO =
	'https://services.arcgis.com/5T5nSi527N4F7luB/arcgis/rest/services/COVID_19_CasesByCountry(pt)_VIEW/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=ADM0_NAME%2Ccum_conf%2Ccum_death%2CID&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=true&returnM=true&quantizationParameters=&sqlFormat=none&f=pjson';

export const coronaUpdateGlobeTOI = 'https://toibnews.timesofindia.indiatimes.com/TOIBNews/coronaextloader.htm';

export const coronaSlogan = 'Planet is fighting with COVID-19';

export const REPORTS_CONFIG = {
	newsHeadlines: {
		name: 'Top Headlines',
		namePrefix: 'newsHeadlines',
	},
	coronaUpdatesIN: {
		name: 'Covid-19 (India)',
		namePrefix: 'coronaUpdatesIN',
	},
	coronaUpdatesGlobe: {
		name: 'Covid-19 (World)',
		namePrefix: 'coronaUpdatesGlobe',
	},
	spotifyViral: {
		name: 'Spotify Top Tracks',
		namePrefix: 'spotifyViral',
	},
};

export const TELEGRAM_WELCOME_KEYBORD = [
	['Head Lines (IND)', 'Head Lines (WLD)'],
	['Covid-19 (IND)', 'Covid-19 (WLD)'],
	['Spotify-10 (IND)', 'Spotify-10 (WLD)'],
	['Free Screen Accounts'],
];

export const TELEGRAM_ACCOUNT_KEYBORD = [
	['Spotify', 'Netflix'],
	['Zee 5 ', 'Amazon Prime'],
	['Premium VPN', 'ALT BalaJi'],
	['Back to Start'],
];

export const TELEGRAM_VALID_FX = 'Bingo 😅! I am processing yours request, Please wait...😊';

export const TELEGRAM_INVALID_FX = 'Oops 😰! I cannot serve your request, Please select something from menu below 😅';

export const TELEGRAM_RETRY_KEYBORD = [
	['Oops! Try Again 😊 (START)'],
	['Head Lines (IND)', 'Head Lines (WLD)'],
	['Covid-19 (IND)', 'Covid-19 (WLD)'],
	['Spotify-10 (IND)', 'Spotify-10 (WLD)'],
];
