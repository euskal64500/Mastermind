import { combineReducers } from 'redux';
import { IS_QA_ENV } from '../components/TestIdProp';

// Levels of difficulty
const LEVEL = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

// Possible colors to choose from the code
const COLORS = ['blue', 'green', 'gold', 'pink', 'ivory', 'brown'];
const initialSettings = { level: LEVEL.EASY };

/* eslint-disable object-curly-newline */
const initialPegs = {
  1: { id: 1, enable: false, color: 'transparent', size: 'large' },
  2: { id: 2, enable: false, color: 'transparent', size: 'large' },
  3: { id: 3, enable: false, color: 'transparent', size: 'large' },
  4: { id: 4, enable: false, color: 'transparent', size: 'large' },

  5: { id: 5, enable: false, color: 'transparent', size: 'large' },
  6: { id: 6, enable: false, color: 'transparent', size: 'large' },
  7: { id: 7, enable: false, color: 'transparent', size: 'large' },
  8: { id: 8, enable: false, color: 'transparent', size: 'large' },

  9: { id: 9, enable: false, color: 'transparent', size: 'large' },
  10: { id: 10, enable: false, color: 'transparent', size: 'large' },
  11: { id: 11, enable: false, color: 'transparent', size: 'large' },
  12: { id: 12, enable: false, color: 'transparent', size: 'large' },

  13: { id: 13, enable: false, color: 'transparent', size: 'large' },
  14: { id: 14, enable: false, color: 'transparent', size: 'large' },
  15: { id: 15, enable: false, color: 'transparent', size: 'large' },
  16: { id: 16, enable: false, color: 'transparent', size: 'large' },

  17: { id: 17, enable: false, color: 'transparent', size: 'large' },
  18: { id: 18, enable: false, color: 'transparent', size: 'large' },
  19: { id: 19, enable: false, color: 'transparent', size: 'large' },
  20: { id: 20, enable: false, color: 'transparent', size: 'large' },

  21: { id: 21, enable: false, color: 'transparent', size: 'large' },
  22: { id: 22, enable: false, color: 'transparent', size: 'large' },
  23: { id: 23, enable: false, color: 'transparent', size: 'large' },
  24: { id: 24, enable: false, color: 'transparent', size: 'large' },

  25: { id: 25, enable: false, color: 'transparent', size: 'large' },
  26: { id: 26, enable: false, color: 'transparent', size: 'large' },
  27: { id: 27, enable: false, color: 'transparent', size: 'large' },
  28: { id: 28, enable: false, color: 'transparent', size: 'large' },

  29: { id: 29, enable: false, color: 'transparent', size: 'large' },
  30: { id: 30, enable: false, color: 'transparent', size: 'large' },
  31: { id: 31, enable: false, color: 'transparent', size: 'large' },
  32: { id: 32, enable: false, color: 'transparent', size: 'large' },

  33: { id: 33, enable: false, color: 'transparent', size: 'large' },
  34: { id: 34, enable: false, color: 'transparent', size: 'large' },
  35: { id: 35, enable: false, color: 'transparent', size: 'large' },
  36: { id: 36, enable: false, color: 'transparent', size: 'large' },

  37: { id: 37, enable: false, color: 'transparent', size: 'large' },
  38: { id: 38, enable: false, color: 'transparent', size: 'large' },
  39: { id: 39, enable: false, color: 'transparent', size: 'large' },
  40: { id: 40, enable: false, color: 'transparent', size: 'large' },

  41: { id: 41, enable: false, color: 'transparent', size: 'large' },
  42: { id: 42, enable: false, color: 'transparent', size: 'large' },
  43: { id: 43, enable: false, color: 'transparent', size: 'large' },
  44: { id: 44, enable: false, color: 'transparent', size: 'large' },

  45: { id: 45, enable: true, color: 'transparent', size: 'large' },
  46: { id: 46, enable: true, color: 'transparent', size: 'large' },
  47: { id: 47, enable: true, color: 'transparent', size: 'large' },
  48: { id: 48, enable: true, color: 'transparent', size: 'large' },

  49: { id: 49, enable: false, color: 'transparent', size: 'small' },
  50: { id: 50, enable: false, color: 'transparent', size: 'small' },
  51: { id: 51, enable: false, color: 'transparent', size: 'small' },
  52: { id: 52, enable: false, color: 'transparent', size: 'small' },

  53: { id: 53, enable: false, color: 'transparent', size: 'small' },
  54: { id: 54, enable: false, color: 'transparent', size: 'small' },
  55: { id: 55, enable: false, color: 'transparent', size: 'small' },
  56: { id: 56, enable: false, color: 'transparent', size: 'small' },

  57: { id: 57, enable: false, color: 'transparent', size: 'small' },
  58: { id: 58, enable: false, color: 'transparent', size: 'small' },
  59: { id: 59, enable: false, color: 'transparent', size: 'small' },
  60: { id: 60, enable: false, color: 'transparent', size: 'small' },

  61: { id: 61, enable: false, color: 'transparent', size: 'small' },
  62: { id: 62, enable: false, color: 'transparent', size: 'small' },
  63: { id: 63, enable: false, color: 'transparent', size: 'small' },
  64: { id: 64, enable: false, color: 'transparent', size: 'small' },

  65: { id: 65, enable: false, color: 'transparent', size: 'small' },
  66: { id: 66, enable: false, color: 'transparent', size: 'small' },
  67: { id: 67, enable: false, color: 'transparent', size: 'small' },
  68: { id: 68, enable: false, color: 'transparent', size: 'small' },

  69: { id: 69, enable: false, color: 'transparent', size: 'small' },
  70: { id: 70, enable: false, color: 'transparent', size: 'small' },
  71: { id: 71, enable: false, color: 'transparent', size: 'small' },
  72: { id: 72, enable: false, color: 'transparent', size: 'small' },

  73: { id: 73, enable: false, color: 'transparent', size: 'small' },
  74: { id: 74, enable: false, color: 'transparent', size: 'small' },
  75: { id: 75, enable: false, color: 'transparent', size: 'small' },
  76: { id: 76, enable: false, color: 'transparent', size: 'small' },

  77: { id: 77, enable: false, color: 'transparent', size: 'small' },
  78: { id: 78, enable: false, color: 'transparent', size: 'small' },
  79: { id: 79, enable: false, color: 'transparent', size: 'small' },
  80: { id: 80, enable: false, color: 'transparent', size: 'small' },

  81: { id: 81, enable: false, color: 'transparent', size: 'small' },
  82: { id: 82, enable: false, color: 'transparent', size: 'small' },
  83: { id: 83, enable: false, color: 'transparent', size: 'small' },
  84: { id: 84, enable: false, color: 'transparent', size: 'small' },

  85: { id: 85, enable: false, color: 'transparent', size: 'small' },
  86: { id: 86, enable: false, color: 'transparent', size: 'small' },
  87: { id: 87, enable: false, color: 'transparent', size: 'small' },
  88: { id: 88, enable: false, color: 'transparent', size: 'small' },

  89: { id: 89, enable: false, color: 'transparent', size: 'small' },
  90: { id: 90, enable: false, color: 'transparent', size: 'small' },
  91: { id: 91, enable: false, color: 'transparent', size: 'small' },
  92: { id: 92, enable: false, color: 'transparent', size: 'small' },

  93: { id: 93, enable: false, color: 'transparent', size: 'small' },
  94: { id: 94, enable: false, color: 'transparent', size: 'small' },
  95: { id: 95, enable: false, color: 'transparent', size: 'small' },
  96: { id: 96, enable: false, color: 'transparent', size: 'small' }
};

const initialGuesses = {
  activeRow: 12,
  1: { id: 1, complete: false, pegs: [1, 2, 3, 4], focused: false },
  2: { id: 2, complete: false, pegs: [5, 6, 7, 8], focused: false },
  3: { id: 3, complete: false, pegs: [9, 10, 11, 12], focused: false },
  4: { id: 4, complete: false, pegs: [13, 14, 15, 16], focused: false },
  5: { id: 5, complete: false, pegs: [17, 18, 19, 20], focused: false },
  6: { id: 6, complete: false, pegs: [21, 22, 23, 24], focused: false },
  7: { id: 7, complete: false, pegs: [25, 26, 27, 28], focused: false },
  8: { id: 8, complete: false, pegs: [29, 30, 31, 32], focused: false },
  9: { id: 9, complete: false, pegs: [33, 34, 35, 36], focused: false },
  10: { id: 10, complete: false, pegs: [37, 38, 39, 40], focused: false },
  11: { id: 11, complete: false, pegs: [41, 42, 43, 44], focused: false },
  12: { id: 12, complete: false, pegs: [45, 46, 47, 48], focused: true }
};

const initialFeedbacks = {
  activeRow: 12,
  1: { id: 1, pegs: [49, 50, 51, 52] },
  2: { id: 2, pegs: [53, 54, 55, 56] },
  3: { id: 3, pegs: [57, 58, 59, 60] },
  4: { id: 4, pegs: [61, 62, 63, 64] },
  5: { id: 5, pegs: [65, 66, 67, 68] },
  6: { id: 6, pegs: [69, 70, 71, 72] },
  7: { id: 7, pegs: [73, 74, 75, 76] },
  8: { id: 8, pegs: [77, 78, 79, 80] },
  9: { id: 9, pegs: [81, 82, 83, 84] },
  10: { id: 10, pegs: [85, 86, 87, 88] },
  11: { id: 11, pegs: [89, 90, 91, 92] },
  12: { id: 12, pegs: [93, 94, 95, 96] }
};
/* eslint-enable object-curly-newline */

const initialPopup = {
  show: false,
  type: 'success'
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * Generates a random array of colors. 3 levels are available. If easy or medium,
 * generator cannot pick the same color twice. If difficult, the same color can be
 * picked twice.
 * @param {String} level one of [easy, medium, hard] and defaults to easy
 * @param {Array} palette choice of colors
 * @param {Number} size number of colors to pick
 */
const codeGenerator = (level = LEVEL.EASY, palette = COLORS, size = 4) => {
  const pick = new Array(size);
  let colorChoices = [...palette];

  for (let i = 0; i < pick.length; i += 1) {
    const colorIndex = getRandomArbitrary(0, colorChoices.length);
    pick[i] = colorChoices[colorIndex];
    if (level !== LEVEL.HARD) {
      // Removes color from palette
      colorChoices = colorChoices.filter((value, index) => index !== colorIndex);
    }
  }
  return pick;
};

const initialSolution = {
  open: false,
  code: IS_QA_ENV ? ['blue', 'pink', 'gold', 'green'] : codeGenerator()
};

const initialGameStatus = {
  status: 'in progress', // status = ['in progress', 'done']
  result: '' // result = ['success', 'failure']
};

const updateSettings = (state = initialSettings, action) => {
  switch (action.type) {
    case 'CHANGE_LEVEL':
      return { level: action.value };
    case 'RESET':
      return initialSettings;
    default:
      return state;
  }
};

const updatePeg = (state = initialPegs, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          color: action.color
        }
      };
    case 'UPDATE_ACTIONABILITY':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          enable: action.enable
        }
      };
    case 'RESET':
      return initialPegs;
    default:
      return state;
  }
};

const updateGuess = (state = initialGuesses, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_ROW':
      return {
        ...state,
        activeRow: action.value
      };
    case 'CHANGE_FOCUS':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          focused: action.focus
        }
      };
    case 'RESET':
      return initialGuesses;
    default:
      return state;
  }
};

const updateFeedback = (state = initialFeedbacks, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_ROW':
      return {
        ...state,
        activeRow: action.value
      };
    case 'RESET':
      return initialFeedbacks;
    default:
      return state;
  }
};

const updatePopup = (state = initialPopup, action) => {
  switch (action.type) {
    case 'SHOW_HELP':
      return {
        ...state,
        show: true,
        type: 'help'
      };
    case 'SHOW_SUCCESS':
      return {
        ...state,
        show: true,
        type: 'success'
      };
    case 'SHOW_FAILURE':
      return {
        ...state,
        show: true,
        type: 'failure'
      };
    case 'CLOSE':
      return {
        ...state,
        show: false,
        type: 'help'
      };
    case 'RESET':
      return initialPopup;
    default:
      return state;
  }
};

const updateSolution = (state = initialSolution, action) => {
  switch (action.type) {
    case 'SHOW_SOLUTION':
      return {
        ...state,
        open: true
      };
    case 'HIDE_SOLUTION':
      return {
        ...state,
        open: false
      };
    case 'RESET':
      return initialSolution;
    default:
      return state;
  }
};

const updateStatus = (state = initialGameStatus, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.status,
        result: action.result
      };
    case 'RESET':
      return initialGameStatus;
    default:
      return state;
  }
};

export const enableBatching = (reducer) => {
  return function batchingReducer(state, action) {
    switch (action.type) {
      case 'BATCH_ACTIONS':
        return action.actions.reduce(batchingReducer, state);
      default:
        return reducer(state, action);
    }
  };
};

export const gameApp = combineReducers({
  settings: updateSettings,
  pegs: updatePeg,
  guesses: updateGuess,
  feedbacks: updateFeedback,
  popup: updatePopup,
  solution: updateSolution,
  game: updateStatus
});

export const COLORS_SET = COLORS;
