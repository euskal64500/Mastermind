// all the pegs on the board
const pegIds = new Array(96).fill(undefined).map((_, i) => `Peg${i + 1}`);

// all the pegs related to user inputs - guesses
const guessIds = new Array(48).fill(undefined).map((_, i) => `Peg${i + 1}`);

// all the pegs related to computer response - feedbacks
const feedbackIds = new Array(48).fill(undefined).map((_, i) => `Peg${i + 48}`);

const rows = [
  { guesses: [1, 2, 3, 4], feedbacks: [49, 50, 51, 52] },
  { guesses: [5, 6, 7, 8], feedbacks: [53, 54, 55, 56] },
  { guesses: [9, 10, 11, 12], feedbacks: [57, 58, 59, 60] },
  { guesses: [13, 14, 15, 16], feedbacks: [61, 62, 63, 64] },
  { guesses: [17, 18, 19, 20], feedbacks: [65, 66, 67, 68] },
  { guesses: [21, 22, 23, 24], feedbacks: [69, 70, 71, 72] },
  { guesses: [25, 26, 27, 28], feedbacks: [73, 74, 75, 76] },
  { guesses: [29, 30, 31, 32], feedbacks: [77, 78, 79, 80] },
  { guesses: [33, 34, 35, 36], feedbacks: [81, 82, 83, 84] },
  { guesses: [37, 38, 39, 40], feedbacks: [85, 86, 87, 88] },
  { guesses: [41, 42, 43, 44], feedbacks: [89, 90, 91, 92] },
  { guesses: [45, 46, 47, 48], feedbacks: [93, 94, 95, 96] }
];

const nRows = 12;

const pegColors = ['blue', 'green', 'gold', 'pink', 'ivory', 'brown'];

module.exports = {
  pegIds,
  guessIds,
  feedbackIds,
  rows,
  nRows,
  pegColors
};
