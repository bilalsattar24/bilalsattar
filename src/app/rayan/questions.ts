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
  {
    id: 9,
    question:
      "In kindergarten, what do kids usually learn to recognize and write?",
    options: ["Planets", "Letters", "Car engines", "Stock prices"],
    correctAnswer: 1,
    funFact: "A-B-C is a big kindergarten superpower!",
  },
  {
    id: 10,
    question: "Which of these is a basic shape taught in kindergarten?",
    options: ["Pentagon", "Triangle", "Octagon", "Parallelogram"],
    correctAnswer: 1,
    funFact: "Triangles have 3 sides!",
  },
  {
    id: 11,
    question: "What do kids often practice in kindergarten during story time?",
    options: ["Listening", "Driving", "Laying Down", "Cooking"],
    correctAnswer: 0,
    funFact: "Great listeners become great readers!",
  },
  {
    id: 12,
    question: "Which number comes after 9?",
    options: ["11", "8", "10", "12"],
    correctAnswer: 2,
    funFact: "Counting is a kindergarten classic!",
  },
  {
    id: 13,
    question: "In Paw Patrol, who is the police pup?",
    options: ["Marshall", "Skye", "Chase", "Rubble"],
    correctAnswer: 2,
    funFact: "Chase is on the case!",
  },
  {
    id: 14,
    question: "Which of these is a Disney princess movie?",
    options: ["Frozen", "Cars", "Toy Story", "Finding Nemo"],
    correctAnswer: 0,
    funFact: "Let it goooo!",
  },
  {
    id: 15,
    question: "What color do you get when you mix red and yellow?",
    options: ["Purple", "Orange", "Green", "Blue"],
    correctAnswer: 1,
    funFact: "Red + Yellow = Orange!",
  },
];
