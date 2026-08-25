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

const comments = {
  1: [
    {
      id: 101,
      author: "TechFan 99",
      avatar: channel_3,
      uploaded: "6 days ago",
      text: "This interview really changed how I see AI development! Google is pushing boundaries."
    },
    {
      id: 102,
      author: "AI_Enthusiast",
      avatar: channel_7,
      uploaded: "1 week ago",
      text: "Sundar's vision for responsible AI is exactly what the industry needs right now."
    },
    {
      id: 103,
      author: "Code Master",
      avatar: channel_11,
      uploaded: "2 days ago",
      text: "The part about AI ethics was super insightful. Great questions from Marques!"
    },
    {
      id: 104,
      author: "Future Thinker",
      avatar: channel_2,
      uploaded: "3 weeks ago",
      text: "I've watched this three times already. So much knowledge packed into one interview."
    },
    {
      id: 105,
      author: "Digital Nomad",
      avatar: channel_9,
      uploaded: "1 month ago",
      text: "Google's approach to AI safety seems much more thoughtful than competitors."
    },
    {
      id: 106,
      author: "Startup Guru",
      avatar: channel_5,
      uploaded: "5 days ago",
      text: "This gives me so many ideas for my own AI startup. Incredible insights!"
    }
  ],

  2: [
    {
      id: 201,
      author: "Gamer_Pro",
      avatar: channel_4,
      uploaded: "2 days ago",
      text: "I failed so hard at this challenge 😂 Markiplier's reactions are unmatched!"
    },
    {
      id: 202,
      author: "LaughLover!!!",
      avatar: channel_8,
      uploaded: "1 week ago",
      text: "Markiplier's laugh is actually contagious. I couldn't stop smiling throughout."
    },
    {
      id: 203,
      author: "ComedyCentral",
      avatar: channel_1,
      uploaded: "3 days ago",
      text: "This is the best Try Not To Laugh episode yet. The editing is perfect."
    },
    {
      id: 204,
      author: "NightOwl",
      avatar: channel_10,
      uploaded: "2 weeks ago",
      text: "Watched this at 2am and almost woke my family up. Worth it!"
    },
    {
      id: 205,
      author: "Casual Viewer",
      avatar: channel_6,
      uploaded: "4 days ago",
      text: "I actually made it through 3 clips before losing. New personal record!"
    },
    {
      id: 206,
      author: "Meme_Lord",
      avatar: channel_12,
      uploaded: "1 month ago",
      text: "The TikTok compilation this month is absolutely wild. 10/10 content."
    }
  ],

  3: [
    {
      id: 301,
      author: "SafetyFirst",
      avatar: channel_5,
      uploaded: "1 day ago",
      text: "These clips are insane! How did people survive these moments?"
    },
    {
      id: 302,
      author: "Thrill Seeker",
      avatar: channel_9,
      uploaded: "3 days ago",
      text: "Some of these were actually terrifying to watch. Don't try this at home!"
    },
    {
      id: 303,
      author: "TikTok Addict",
      avatar: channel_2,
      uploaded: "1 week ago",
      text: "I recognize at least 5 of these from my FYP. TikTok algorithm is chaotic."
    },
    {
      id: 304,
      author: "Physics Nerd",
      avatar: channel_7,
      uploaded: "2 weeks ago",
      text: "The physics in some of these clips defies all logic. Absolutely crazy."
    },
    {
      id: 305,
      author: "Concerned Citizen",
      avatar: channel_11,
      uploaded: "5 days ago",
      text: "People need to be more careful. These could have ended very badly."
    },
    {
      id: 306,
      author: "Entertainment Hub",
      avatar: channel_4,
      uploaded: "1 month ago",
      text: "The editing on this compilation makes it even more intense. Great work!"
    }
  ],

  4: [
    {
      id: 401,
      author: "MathGeek",
      avatar: channel_6,
      uploaded: "4 days ago",
      text: "Finally a math problem explained simply. Veritasium never disappoints!"
    },
    {
      id: 402,
      author: "NumberCruncher",
      avatar: channel_3,
      uploaded: "2 weeks ago",
      text: "I've always been fascinated by the Collatz Conjecture. This video explains it perfectly."
    },
    {
      id: 403,
      author: "CuriousMind",
      avatar: channel_8,
      uploaded: "1 week ago",
      text: "The visualizations here are incredible. Math has never looked so beautiful."
    },
    {
      id: 404,
      author: "CS_Student",
      avatar: channel_1,
      uploaded: "3 weeks ago",
      text: "This is exactly what I needed for my discrete math class. Thank you Veritasium!"
    },
    {
      id: 405,
      author: "ScienceFan",
      avatar: channel_10,
      uploaded: "1 month ago",
      text: "The way Derek explains complex topics is unmatched. Subscribed for years!"
    },
    {
      id: 406,
      author: "PuzzleSolver",
      avatar: channel_12,
      uploaded: "2 days ago",
      text: "I stayed up all night thinking about this. Mathematics is truly amazing."
    }
  ],

  5: [
    {
      id: 501,
      author: "Dev_Guru",
      avatar: channel_7,
      uploaded: "5 days ago",
      text: "This explanation made dynamic programming click for me. Thanks CS Dojo!"
    },
    {
      id: 502,
      author: "CodeNewbie",
      avatar: channel_4,
      uploaded: "1 week ago",
      text: "Kadane's algorithm finally makes sense. The visual explanation is top notch."
    },
    {
      id: 503,
      author: "AlgoTrader",
      avatar: channel_9,
      uploaded: "2 weeks ago",
      text: "I've implemented this so many times but never understood it this deeply."
    },
    {
      id: 504,
      author: "StudentDev",
      avatar: channel_2,
      uploaded: "3 days ago",
      text: "CS Dojo explains coding concepts better than most university lectures."
    },
    {
      id: 505,
      author: "InterviewPrep",
      avatar: channel_11,
      uploaded: "1 month ago",
      text: "This is a must-watch for anyone preparing for coding interviews. Gold content!"
    },
    {
      id: 506,
      author: "Tech Educator",
      avatar: channel_6,
      uploaded: "4 days ago",
      text: "The step-by-step breakdown is perfect. Sharing this with my students."
    }
  ],

  6: [
    {
      id: 601,
      author: "Challenge Fan",
      avatar: channel_1,
      uploaded: "1 day ago",
      text: "MrBeast's content keeps getting crazier and more entertaining!"
    },
    {
      id: 602,
      author: "Philanthropy Fan",
      avatar: channel_5,
      uploaded: "2 weeks ago",
      text: "The generosity in this video is unmatched. MrBeast is changing lives!"
    },
    {
      id: 603,
      author: "GameShow Lover",
      avatar: channel_8,
      uploaded: "3 days ago",
      text: "The tension in this challenge was unreal. I was on the edge of my seat!"
    },
    {
      id: 604,
      author: "Random Viewer",
      avatar: channel_12,
      uploaded: "1 week ago",
      text: "How does someone even come up with these concepts? Pure genius."
    },
    {
      id: 605,
      author: "Budget Watcher",
      avatar: channel_3,
      uploaded: "1 month ago",
      text: "The production budget on this must have been insane. Worth every penny!"
    },
    {
      id: 606,
      author: "SocialMedia-Mogul",
      avatar: channel_10,
      uploaded: "5 days ago",
      text: "This video broke the internet when it came out. Still getting views years later!"
    }
  ],

  7: [
    {
      id: 701,
      author: "GeoBuff",
      avatar: channel_4,
      uploaded: "2 days ago",
      text: "Never knew this fact. The geography explanation was fascinating!"
    },
    {
      id: 702,
      author: "Pilot_Life",
      avatar: channel_9,
      uploaded: "1 week ago",
      text: "As a pilot, I can confirm this is accurate. Interesting flight path restrictions."
    },
    {
      id: 703,
      author: "MapGeek",
      avatar: channel_2,
      uploaded: "3 weeks ago",
      text: "RealLifeLore always has the most interesting geography facts. Love this channel!"
    },
    {
      id: 704,
      author: "CuriousCat",
      avatar: channel_7,
      uploaded: "4 days ago",
      text: "I've wondered about this for years. Finally got a proper explanation!"
    },
    {
      id: 705,
      author: "Travel_Bug",
      avatar: channel_11,
      uploaded: "2 weeks ago",
      text: "Makes me want to book a flight and see Tibet from above someday."
    },
    {
      id: 706,
      author: "FactChecker",
      avatar: channel_1,
      uploaded: "1 month ago",
      text: "I did my own research after this video. All the facts check out. Great content!"
    }
  ],

  8: [
    {
      id: 801,
      author: "AviationNerd",
      avatar: channel_6,
      uploaded: "3 days ago",
      text: "The scale of this plane is absolutely mind-blowing!"
    },
    {
      id: 802,
      author: "EngineerLife",
      avatar: channel_3,
      uploaded: "1 week ago",
      text: "The engineering behind this aircraft is a masterpiece of modern technology."
    },
    {
      id: 803,
      author: "Travel_Junkie",
      avatar: channel_8,
      uploaded: "2 weeks ago",
      text: "I've been on this plane! It's massive inside. Great video showing the details."
    },
    {
      id: 804,
      author: "DesignFan",
      avatar: channel_12,
      uploaded: "5 days ago",
      text: "The interior design is stunning. First class looks like a hotel suite!"
    },
    {
      id: 805,
      author: "TechReviewer",
      avatar: channel_10,
      uploaded: "1 month ago",
      text: "This is peak aviation content. Tech Vision always delivers quality videos."
    },
    {
      id: 806,
      author: "DreamVacation",
      avatar: channel_5,
      uploaded: "3 weeks ago",
      text: "Saving up for a first class ticket on this plane. One day!"
    }
  ],

  9: [
    {
      id: 901,
      author: "FitnessFreak",
      avatar: channel_2,
      uploaded: "1 day ago",
      text: "ThenX always has the most intense workout content. Motivated!"
    },
    {
      id: 902,
      author: "GymRat",
      avatar: channel_7,
      uploaded: "2 days ago",
      text: "Tried this workout and couldn't walk the next day. Brutal but effective!"
    },
    {
      id: 903,
      author: "CalisthenicsPro",
      avatar: channel_4,
      uploaded: "1 week ago",
      text: "The progressions in this video are perfect for building real strength."
    },
    {
      id: 904,
      author: "Morning Workout",
      avatar: channel_9,
      uploaded: "3 days ago",
      text: "Started doing this routine every morning. Already seeing results after 2 weeks!"
    },
    {
      id: 905,
      author: "DisciplineDaily",
      avatar: channel_11,
      uploaded: "2 weeks ago",
      text: "ThenX doesn't just give workouts, he gives a whole mindset shift. Powerful stuff."
    },
    {
      id: 906,
      author: "HomeGym_Hero",
      avatar: channel_1,
      uploaded: "1 month ago",
      text: "No equipment needed and still gets you dripping sweat. Perfect for home workouts!"
    }
  ],

  10: [
    {
      id: 1001,
      author: "Logistics_Geek",
      avatar: channel_5,
      uploaded: "4 days ago",
      text: "30,000 meals a day? The logistics behind this are incredible."
    },
    {
      id: 1002,
      author: "CruiseFan",
      avatar: channel_8,
      uploaded: "1 week ago",
      text: "I've been on cruises before but never realized the scale of operations below deck."
    },
    {
      id: 1003,
      author: "SupplyChain Mgr",
      avatar: channel_3,
      uploaded: "2 weeks ago",
      text: "As someone in logistics, this video gives me so much appreciation for cruise operations."
    },
    {
      id: 1004,
      author: "FoodieTraveler",
      avatar: channel_12,
      uploaded: "3 days ago",
      text: "The quality of food on cruise ships is seriously underrated. This proves it!"
    },
    {
      id: 1005,
      author: "Engineering Minds",
      avatar: channel_10,
      uploaded: "1 month ago",
      text: "Business Insider always makes these complex systems easy to understand."
    },
    {
      id: 1006,
      author: "Vacation Planner",
      avatar: channel_6,
      uploaded: "5 days ago",
      text: "After watching this, I'm definitely booking a cruise. The organization is impressive!"
    }
  ],

  11: [
    {
      id: 1101,
      author: "Engineering Wiz",
      avatar: channel_9,
      uploaded: "2 days ago",
      text: "Dubai really said 'hold my desert' and built this. Incredible engineering!"
    },
    {
      id: 1102,
      author: "Urban Planner",
      avatar: channel_4,
      uploaded: "1 week ago",
      text: "The infrastructure in Dubai is decades ahead of most cities. Impressive."
    },
    {
      id: 1103,
      author: "TravelVlogger",
      avatar: channel_2,
      uploaded: "3 weeks ago",
      text: "I visited Dubai last year and this train was already operational. Mind blowing!"
    },
    {
      id: 1104,
      author: "Infrastructure Fan",
      avatar: channel_7,
      uploaded: "4 days ago",
      text: "Building underwater tunnels is no joke. The engineering here is world-class."
    },
    {
      id: 1105,
      author: "MiddleEast-Explorer",
      avatar: channel_11,
      uploaded: "2 weeks ago",
      text: "Dubai continues to amaze me. Every visit reveals another marvel of engineering."
    },
    {
      id: 1106,
      author: "FutureCities",
      avatar: channel_1,
      uploaded: "1 month ago",
      text: "This is what happens when you have vision and unlimited resources. Inspiring!"
    }
  ],

  12: [
    {
      id: 1201,
      author: "ScienceNerd",
      avatar: channel_3,
      uploaded: "1 day ago",
      text: "TED-Ed always has the most thought-provoking content. Worth watching!"
    },
    {
      id: 1202,
      author: "HealthConscious",
      avatar: channel_8,
      uploaded: "3 days ago",
      text: "This made me realize I need to drink more water. Simple but powerful message."
    },
    {
      id: 1203,
      author: "Biology Student",
      avatar: channel_6,
      uploaded: "1 week ago",
      text: "The animation quality in TED-Ed videos is always top tier. Love this channel!"
    },
    {
      id: 1204,
      author: "Daily_Viewer",
      avatar: channel_10,
      uploaded: "2 weeks ago",
      text: "I watch TED-Ed videos every morning with breakfast. Never fails to educate me."
    },
    {
      id: 1205,
      author: "Mindful Living",
      avatar: channel_12,
      uploaded: "1 month ago",
      text: "Water is life indeed. This video perfectly explains why we shouldn't take it for granted."
    },
    {
      id: 1206,
      author: "Teacher Life",
      avatar: channel_5,
      uploaded: "5 days ago",
      text: "I show these kinds of videos to my students. They love the animation and learn so much!"
    }
  ]
};

export default comments;
