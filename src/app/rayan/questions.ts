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
    question: "What is Rayan's favorite color?",
    options: ["Blue", "Red", "Green", "Purple"],
    correctAnswer: 0,
    funFact: "Rayan loves blue like the ocean!",
  },
  {
    id: 2,
    question: "What is Rayan's favorite food?",
    options: ["Pizza", "Pasta", "Burgers", "Tacos"],
    correctAnswer: 0,
    funFact: "Pizza parties are the best!",
  },
  {
    id: 3,
    question: "What sport does Rayan love the most?",
    options: ["Soccer", "Basketball", "Baseball", "Swimming"],
    correctAnswer: 1,
    funFact: "Rayan shoots hoops like a pro!",
  },
  {
    id: 4,
    question: "What is Rayan's favorite subject in school?",
    options: ["Math", "Science", "Art", "PE"],
    correctAnswer: 2,
    funFact: "Rayan is super creative!",
  },
  {
    id: 5,
    question: "What is Rayan's favorite animal?",
    options: ["Dog", "Cat", "Elephant", "Lion"],
    correctAnswer: 0,
    funFact: "Dogs are the best friends!",
  },
  {
    id: 6,
    question: "What is Rayan's favorite ice cream flavor?",
    options: ["Vanilla", "Chocolate", "Strawberry", "Mint Chip"],
    correctAnswer: 1,
    funFact: "Nothing beats chocolate!",
  },
  {
    id: 7,
    question: "What is Rayan's favorite video game?",
    options: ["Minecraft", "Fortnite", "Roblox", "Mario Kart"],
    correctAnswer: 2,
    funFact: "Building and creating in Roblox is so fun!",
  },
  {
    id: 8,
    question: "What is Rayan's favorite movie?",
    options: ["Spider-Man", "Frozen", "Toy Story", "The Lion King"],
    correctAnswer: 0,
    funFact: "With great power comes great responsibility!",
  },
  {
    id: 9,
    question: "What is Rayan's favorite season?",
    options: ["Spring", "Summer", "Fall", "Winter"],
    correctAnswer: 1,
    funFact: "Summer means no school and lots of fun!",
  },
  {
    id: 10,
    question: "What is Rayan's dream vacation destination?",
    options: ["Disneyland", "Beach", "Mountains", "New York City"],
    correctAnswer: 0,
    funFact: "The happiest place on Earth!",
  },
];
