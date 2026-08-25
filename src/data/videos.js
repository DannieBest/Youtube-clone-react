import categories from './categories';

import thumbnail_1 from '../assets/thumbnails/thumbnail-1.webp';
import thumbnail_2 from '../assets/thumbnails/thumbnail-2.webp';
import thumbnail_3 from '../assets/thumbnails/thumbnail-3.webp';
import thumbnail_4 from '../assets/thumbnails/thumbnail-4.webp';
import thumbnail_5 from '../assets/thumbnails/thumbnail-5.webp';
import thumbnail_6 from '../assets/thumbnails/thumbnail-6.webp';
import thumbnail_7 from '../assets/thumbnails/thumbnail-7.webp';
import thumbnail_8 from '../assets/thumbnails/thumbnail-8.webp';
import thumbnail_9 from '../assets/thumbnails/thumbnail-9.webp';
import thumbnail_10 from '../assets/thumbnails/thumbnail-10.webp';
import thumbnail_11 from '../assets/thumbnails/thumbnail-11.webp';
import thumbnail_12 from '../assets/thumbnails/thumbnail-12.webp';


import channel_1 from '../assets/channel-images/channel-1.jpeg';
import channel_2 from '../assets/channel-images/channel-2.jpeg';
import channel_3 from '../assets/channel-images/channel-3.jpeg';
import channel_4 from '../assets/channel-images/channel-4.jpeg';
import channel_5 from '../assets/channel-images/channel-5.jpeg';
import channel_6 from '../assets/channel-images/channel-6.jpeg';
import channel_7 from '../assets/channel-images/channel-7.jpeg';
import channel_8 from '../assets/channel-images/channel-8.jpeg';
import channel_9 from '../assets/channel-images/channel-9.jpeg';
import channel_10 from '../assets/channel-images/channel-10.jpeg';
import channel_11 from '../assets/channel-images/channel-11.jpeg';
import channel_12 from '../assets/channel-images/channel-12.jpeg';

const videos = [
  {
    id: 1,
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    channel: "Marques Brownlee",
    thumbnail: thumbnail_1,
    channelImage: channel_1,
    views: "3.4M views",
    uploaded: "6 months ago",
    duration: "14:20",
    verified: true,
    category: categories[8],
    likes: 245,
    comments: [
      {
        id: 1,
        author: "Alex",
        avatar: channel_1,
        text: "This interview really changed how I see AI development! Google is pushing boundaries.",
      }
    ]
  },
  {
    id: 2,
    title: "Try Not To Laugh Challenge #9",
    channel: "Markiplier",
    thumbnail: thumbnail_2,
    channelImage: channel_2,
    views: "19M views",
    uploaded: "4 years ago",
    duration: "8:22",
    verified: true,
    category: categories[3],
    likes: 1200000,
    comments: [
      {
        id: 2,
        author: "Jordan",
        avatar: channel_2,
        text: "I failed so hard at this challenge 😂 Markiplier's reactions are unmatched!",
      }
    ]
  },
  {
    id: 3,
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    channel: "SSSniper Wolf",
    thumbnail: thumbnail_3,
    channelImage: channel_3,
    views: "12M views",
    uploaded: "1 year ago",
    duration: "9:13",
    verified: true,
    category: categories[3],
    likes: 89,
    comments: [
      {
        id: 3,
        author: "Sam",
        avatar: channel_3,
        text: "These clips are insane! How did people survive these moments?",
      }
    ]
  },
  {
    id: 4,
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    channel: "Veritasium",
    thumbnail: thumbnail_4,
    channelImage: channel_4,
    views: "18M views",
    uploaded: "4 months ago",
    duration: "22:09",
    verified: true,
    category: categories[11],
    likes: 1500000,
    comments: [
      {
        id: 4,
        author: "Taylor",
        avatar: channel_4,
        text: "Finally a math problem explained simply. Veritasium never disappoints!",
      }
    ]
  },
  {
    id: 5,
    title: "Kadane's Algorithm To Maximum Sum Subarray Problem",
    channel: "CS Dojo",
    thumbnail: thumbnail_5,
    channelImage: channel_5,
    views: "519k views",
    uploaded: "5 years ago",
    duration: "11:17",
    verified: true,
    category: categories[12],
    likes: 320,
    comments: [
      {
        id: 5,
        author: "Morgan",
        avatar: channel_5,
        text: "This explanation made dynamic programming click for me. Thanks CS Dojo!",
      }
    ]
  },
  {
    id: 6,
    title: "Anything You can Fit In This Circle I'll Pay For",
    channel: "MrBeast",
    thumbnail: thumbnail_6,
    channelImage: channel_6,
    views: "141M views",
    uploaded: "1 year ago",
    duration: "19:59",
    verified: true,
    category: categories[5],
    likes: 3200,
    comments: [
      {
        id: 6,
        author: "Casey",
        avatar: channel_6,
        text: "MrBeast's content keeps getting crazier and more entertaining!",
      }
    ]
  },
  {
    id: 7,
    title: "Why Planes Don't Fly Over Tibet",
    channel: "RealLifeLore",
    thumbnail: thumbnail_7,
    channelImage: channel_7,
    views: "6.6M views",
    uploaded: "1 year ago",
    duration: "10:13",
    verified: true,
    category: categories[15],
    likes: 420000,
    comments: [
      {
        id: 7,
        author: "Riley",
        avatar: channel_7,
        text: "Never knew this fact. The geography explanation was fascinating!",
      }
    ]
  },
  {
    id: 8,
    title: "Inside The World's Biggest Passenger Plane",
    channel: "Tech Vision",
    thumbnail: thumbnail_8,
    channelImage: channel_8,
    views: "3.7M views",
    uploaded: "10 months ago",
    duration: "7:12",
    verified: true,
    category: categories[5],
    likes: 18,
    comments: [
      {
        id: 8,
        author: "Quinn",
        avatar: channel_8,
        text: "The scale of this plane is absolutely mind-blowing!",
      }
    ]
  },

  {
    id: 9,
    title: "The SECRET to Super Human STRENGTH",
    channel: "ThenX",
    thumbnail: thumbnail_9,
    channelImage: channel_9,
    views: "20M views",
    uploaded: "3 years ago",
    duration: "13:17",
    verified: true,
    category: categories[3],
    likes: 1800000,
    comments: [
      {
        id: 9,
        author: "Avery",
        avatar: channel_9,
        text: "ThenX always has the most intense workout content. Motivated!",
      }
    ]
  },
  {
    id: 10,
    title: "How the world's Largest Cruise Ship Makes 30,000 Meals Every Day",
    channel: "Business Insider",
    thumbnail: thumbnail_10,
    channelImage: channel_10,
    views: "14M views",
    uploaded: "1 year ago",
    duration: "7:53",
    verified: true,
    category: categories[4],
    likes: 750,
    comments: [
      {
        id: 10,
        author: "Jamie",
        avatar: channel_10,
        text: "30,000 meals a day? The logistics behind this are incredible.",
      }
    ]
  },
  {
    id: 11,
    title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    channel: "Destination Tips.",
    thumbnail: thumbnail_11,
    channelImage: channel_11,
    views: "3M views",
    uploaded: "1 year ago",
    duration: "4:10",
    verified: true,
    category: categories[15],
    likes: 165,
    comments: [
      {
        id: 11,
        author: "Drew",
        avatar: channel_11,
        text: "Dubai really said 'hold my desert' and built this. Incredible engineering!",
      }
    ]
  },
  {
    id: 12,
    title: "What would happen if you didn't drink water?- Mia Nacamulli",
    channel: "TED-Ed",
    thumbnail: thumbnail_12,
    channelImage: channel_12,
    views: "12M views",
    uploaded: "5 years ago",
    duration: "4:51",
    verified: true,
    category: categories[6],
    likes: 610,
    comments: [
      {
        id: 12,
        author: "Skyler",
        avatar: channel_12,
        text: "TED-Ed always has the most thought-provoking content. Worth watching!",
      }
    ]
  }
];

export default videos;