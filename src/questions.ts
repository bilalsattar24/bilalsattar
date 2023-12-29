type Question = {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
};

export const questions: Question[] = [
  {
    questionText: 'When did the Sattar family move here?',
    options: ['2001', '2011', '2008', '2014'],
    correctOptionIndex: 2,
  },
  {
    questionText:
      'What iconic cosmetics brand is known for its red lipsticks, including the shade "Ruby Woo"?',
    options: ['Maybelline', 'NARS', 'MAC Cosmetics', 'Revlon'],
    correctOptionIndex: 2,
  },
  {
    questionText:
      'Which famous neighborhood in Los Angeles is known as the epicenter of the American film and television industry?',
    options: ['Beverly Hills', 'Hollywood', 'Santa Monica', 'Venice'],
    correctOptionIndex: 1,
  },
  {
    questionText:
      'Which iconic fashion magazine is known for its annual September issue and has been the subject of a documentary?',
    options: ['Vogue', 'Elle', 'Cosmopolitan', 'InStyle'],
    correctOptionIndex: 0,
  },
  {
    questionText: 'Which city did Maymah grow up in?',
    options: ['Culver City', 'Torrance', 'Hawthorne', 'Marina Del Rey'],
    correctOptionIndex: 0,
  },
  {
    questionText:
      'Which constellation is often associated with summer and can be seen prominently in the night sky during this season?',
    options: ['Orion', 'Ursa Major', 'Cassiopeia', 'Cygnus'],
    correctOptionIndex: 2,
  },
  {
    questionText: 'Are you enjoying this game??',
    options: ['Yes', 'No', 'Maybe', 'zzzzzz'],
    correctOptionIndex: 0,
  },
  {
    questionText: 'What programming language is this website written in?',
    options: ['Java', 'C++', 'Javscript', 'Swift'],
    correctOptionIndex: 2,
  },
  {
    questionText:
      'In which month does the summer season typically begin in the Northern Hemisphere?',
    options: ['June', 'July', 'August', 'September'],
    correctOptionIndex: 0,
  },
  {
    questionText:
      'What is the phenomenon that occurs during summer solstice, where the sun is at its highest point in the sky and the day has the longest daylight hours?',
    options: ['Equinox', 'Solstice', 'Eclipse', 'Aurora'],
    correctOptionIndex: 1,
  },
  {
    questionText:
      'The "Hollywood Sign" originally read a different phrase before it was changed to "Hollywood." What was the original phrase?',
    options: ['Hollywoodland', 'Hollywood Hills', 'Silver Screen', 'Tinseltown'],
    correctOptionIndex: 0,
  },
  {
    questionText:
      'Which major Los Angeles freeway is known for its heavy traffic congestion and its mention in countless movies and songs?',
    options: ['Interstate 405', 'Interstate 10', 'Interstate 5', 'Interstate 101'],
    correctOptionIndex: 0,
  },
];

export const rayanBirthdayQuestions: Question[] = [
  {
    questionText: 'What does Rayan call his blanket?',
    options: ['Be', 'Me', 'Binky', 'Blanket'],
    correctOptionIndex: 1,
  },
  {
    questionText: "What is Rayan's first word(s)",
    options: ['Car', 'Wow', 'Mama', 'Doodoo'],
    correctOptionIndex: 2,
  },
  {
    questionText: "What is Rayan's height",
    options: ['34"', '30"', '32"', '36"'],
    correctOptionIndex: 0,
  },
  {
    questionText: 'How does Rayan pronounce Cybertruck',
    options: ['shyber', 'sychuck', 'cyber truck', 'chuck'],
    correctOptionIndex: 1,
  },
  {
    questionText: "What is Rayan's actual birthday",
    options: ['December 31st', 'December 25th', 'December 30th', 'December 29th'],
    correctOptionIndex: 3,
  },
];
