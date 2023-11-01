// const API_KEY = "AIzaSyA8lfxos74Zml7rDdLpTnj_a7kYH4CWQK0";
// const API_KEY = `AIzaSyBc0v1vJyoCnkx6iZjSy6Z5e-0N821LXB0`;
const API_KEY = `AIzaSyBhZScCUJUl14NgoaTNdos73cGoGHrF-5k`;
// const API_KEY = `AIzaSyDg49pYRmEZOZ2KIXlfujRpTi_GyeRj73c`;

export const YOUTUBE_MOST_POPULAR_URL = `https://youtube.googleapis.com/youtube/v3/videos?maxResults=50&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&`;

export const VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&`;

export const SEARCH_SUGGESTION_API = `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const COMMENTS_URL = `http://hn.algolia.com/api/v1/items/16582136`;

export const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&key=${API_KEY}&id=`;

export const YOUTUBE_SUGGESTED_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}&`;

export const YOUTUBE_SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_KEY}&q=`;

export const ButtonList = ["All", "Music", "Mixes", "Live", "News", "Events", "Editing", "Television", "Videos", "Dramedy", "Comedy", "Watched", "Recently Uploaded"];
