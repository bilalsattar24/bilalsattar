export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-3)
  funFact?: string; // optional fun fact shown after answering
}

export const triviaQuestions: Question[] = [
  {
    id: 1,
    question: "What school does Rayan go to?",
    options: [
      "Bright Horizons",
      "Edison Elementary",
      "Al Huda Islamic School",
      "Little Scholars",
    ],
    correctAnswer: 2,
    funFact: "He loves learning new things every day!",
  },
  {
    id: 2,
    question: "What grade is Rayan in?",
    options: ["Kindergarten", "Pre School", "Daycare", "1st Grade"],
    correctAnswer: 1,
    funFact: "Pre School is so much fun!",
  },
  {
    id: 3,
    question: "What is Rayan's favorite thing to watch on TV?",
    options: ["Bluey", "Peppa Pig", "Cocomelon", "Paw Patrol"],
    correctAnswer: 3,
    funFact: "No job is too big, no pup is too small!",
  },
  {
    id: 4,
    question: "What is Rayan's favorite food?",
    options: ["Pizza", "Chicken Nuggets", "Rice and Boti", "Mac & Cheese"],
    correctAnswer: 2,
    funFact: "Yum yum in my tum tum!",
  },
  {
    id: 5,
    question: "When is Rayan's actual birthday?",
    options: ["December 27th", "December 29th", "December 25th", "January 1st"],
    correctAnswer: 1,
    funFact: "A special winter birthday!",
  },
  {
    id: 6,
    question: "What is Rayan's favorite dessert?",
    options: ["Cookies", "Cake", "Ice Cream", "Brownies"],
    correctAnswer: 2,
    funFact: "Sweet treats are the best!",
  },
  {
    id: 7,
    question: "What is Rayan's favorite video game?",
    options: ["Minecraft", "Astro's Playroom", "Roblox", "Mario Kart"],
    correctAnswer: 1,
    funFact: "Astro is a super fun little robot!",
  },
  {
    id: 8,
    question: "What is Rayan's favorite breakfast?",
    options: ["Pancakes", "Eggs", "Cereal", "Waffles"],
    correctAnswer: 2,
    funFact: "Crunch crunch — breakfast time!",
  },
];
