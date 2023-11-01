import moment from "moment/moment";

export const formatViewCount = (viewCount) => {

  if (!viewCount)
    return null;
  else if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "K";
  } else {
    return viewCount.toString();
  }
};

export const convertDateToMonthAndYear = (dateString) => {
  const date = moment(dateString);
  return date.format("MM/YYYY");
};

var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function randomNameGenarator() {
     return nameList[Math.floor(Math.random() * nameList.length)];
};

export function randomMessageGenarator() {
     return messages[Math.floor(Math.random() * messages.length)];
};
const messages = [
  `Hey, how's it going?`,
  `Not too bad, thanks. What have you been up to lately?`,
  `I've been working on a new project at work. It's been quite busy.`,
  `That sounds challenging. Tell me more about it.`,
  `Well, it's a software development project, and we're trying to meet a tight deadline.`,
  `I see. What's the project about?`,
  `It's a mobile app for tracking personal expenses. We want to make it user-friendly.`,
  `Sounds useful. Are you the lead developer on this project?`,
  `No, I'm just a team member, but I'm responsible for the user interface.`,
  `I'd love to see the app when it's ready.`,
  `Sure, I can show you a demo once we're further along in development.`,
  `That'd be great. By the way, have you ever been to Japan?`,
  `No, I haven't been, but I've always wanted to visit. How about you?`,
  `I went there last year, and it was an amazing experience. The culture and food are fantastic.`,
  `I've heard great things about Japan. I definitely want to go someday.`,
  `You should! Let me know if you plan a trip; I can give you some recommendations.`,
  `That would be wonderful. Thanks for offering!`,
  `Hey, have you ever tried skydiving?`,
  `No, I haven't, but I've thought about it. Have you?`,
  `I have, and it was the most exhilarating experience of my life.`,
  `I'm both excited and scared at the thought of jumping out of a plane!`,
  `It's natural to feel that way, but it's truly worth trying at least once.`,
  `I'll consider it. How was your first skydiving experience?`,
  `Nerve-wracking at first, but the adrenaline rush was unforgettable.`,
  `Wow, that sounds amazing. I might gather the courage to try it one day.`,
  `You won't regret it! Just make sure to go with a reputable skydiving center.`,
  `I'll keep that in mind. Thanks for sharing your experience!`,
];








