// Possible colors to choose from the code
const COLORS = ['blue', 'green', 'gold', 'pink', 'ivory', 'brown'];

// Number of positions
const CODESIZE = 4;

const nextColor = (color) => {
  const prevIndexColor = COLORS.indexOf(color);
  const newIndexColor = (prevIndexColor === COLORS.length) || (color === '') ? 0 : prevIndexColor + 1;
  return COLORS[newIndexColor];
};

const findMatchIndexes = (array1, array2) => array1.reduce((prev, value, index) => {
  const isMatch = (value === array2[index]) ? prev.concat(index) : prev;
  return isMatch;
}, []);

const removeValue = (array, e) => array.filter(value => value !== e);

const matches = (array1, array2) => array1.reduce(
  (prev, value, index) => ((value !== array2[index]) ? false : prev), true
);

/**
 * Compares codes in 2 arrays
 * @param {Array} first array
 * @param {Array} second array
 * @returns {Array} Returns the number of correctly placed pegs and misplaced pegs
 */
const compareCodes = (array1, array2) => {
  let nbOfMatch = 0;
  let nbOfMisplaced = 0;

  // find matching indexes
  const indexMatch = findMatchIndexes(array1, array2);
  nbOfMatch = indexMatch.length;

  // remove matching elements
  const arr1 = array1.filter((value, index) => !indexMatch.includes(index));
  let arr2 = array2.filter((value, index) => !indexMatch.includes(index));

  // count misplaced elements
  // removes element from reference array every time a match is found
  nbOfMisplaced = arr1.reduce((acc, value) => {
    let incValue = acc;
    if (arr2.includes(value)) {
      arr2 = removeValue(arr2, value);
      incValue += 1;
    }
    return incValue;
  }, 0);
  return [nbOfMatch, nbOfMisplaced];
};

const generateFeedback = (guess, solution) => {
  const result = [];
  const [match, misplaced] = compareCodes(guess, solution);
  for (let i = 0; i < match; i += 1) {
    result.push('black');
  }
  for (let i = 0; i < misplaced; i += 1) {
    result.push('white');
  }
  for (let i = result.length; i < CODESIZE; i += 1) {
    result.push('transparent');
  }
  return result;
};

export const changePegColor = (pegNum, newColor) => ({
  type: 'UPDATE_COLOR',
  id: pegNum,
  color: newColor
});

export const nextPegColor = pegNum => (dispatch, getState) => {
  const { color } = getState().pegs[pegNum];
  const newColor = nextColor(color);
  dispatch(changePegColor(pegNum, newColor));
};

export const disablePeg = pegNum => ({
  type: 'UPDATE_ACTIONABILITY',
  id: pegNum,
  enable: false
});

export const enablePeg = pegNum => ({
  type: 'UPDATE_ACTIONABILITY',
  id: pegNum,
  enable: true
});

export const openShield = () => ({
  type: 'SHOW_SOLUTION'
});

export const changeActiveRow = rowNum => ({
  type: 'UPDATE_ACTIVE_ROW',
  value: rowNum
});

export const changeLevel = level => ({
  type: 'CHANGE_LEVEL',
  value: level
});

export const showHelp = () => ({
  type: 'SHOW_HELP'
});

export const showCongrats = () => ({
  type: 'SHOW_SUCCESS'
});

export const showFailure = () => ({
  type: 'SHOW_FAILURE'
});

export const closePopup = () => ({
  type: 'CLOSE'
});

export const reset = () => ({
  type: 'RESET'
});

export const changeFocus = (rowNum, focused) => ({
  type: 'CHANGE_FOCUS',
  id: rowNum,
  focus: focused
});

export const updateStatus = outcome => ({
  type: 'UPDATE_STATUS',
  status: 'done',
  result: outcome
});

export const batchActions = (...actions) => ({
  type: 'BATCH_ACTIONS',
  actions
});

export const enableRow = rowNum => (dispatch, getState) => {
  const state = getState();
  const pegIds = state.guesses[rowNum].pegs;
  const actions = pegIds.map(i => enablePeg(i));
  dispatch(batchActions(changeActiveRow(rowNum), changeFocus(rowNum, true), ...actions));
};

export const disableRow = rowNum => (dispatch, getState) => {
  const state = getState();
  const pegIds = state.guesses[rowNum].pegs;
  const actions = pegIds.map(i => disablePeg(i));
  dispatch(batchActions(changeFocus(rowNum, false), ...actions));
};

export const disableCurrentRow = () => (dispatch, getState) => {
  const state = getState();
  const { guesses: { activeRow } } = state;
  dispatch(disableRow(activeRow));
};

export const enableNextRow = () => (dispatch, getState) => {
  const state = getState();
  const { game: { status } } = state;
  let { guesses: { activeRow } } = state;

  if ((activeRow === 1) && (status === 'in progress')) {
    dispatch(updateStatus('failed'));
  }

  if ((activeRow > 1) && (status === 'in progress')) {
    activeRow -= 1;
    dispatch(enableRow(activeRow));
  }
};

export const changeFeedbackColors = feedbackColors => (dispatch, getState) => {
  const state = getState();
  const { feedbacks: { activeRow } } = state;
  const pegIds = state.feedbacks[activeRow].pegs;
  const pegColors = pegIds.map((id, index) => feedbackColors[index]);
  const actions = pegIds.map((id, index) => changePegColor(id, pegColors[index]));
  dispatch(batchActions(...actions));
};

export const giveFeedback = () => (dispatch, getState) => {
  const state = getState();
  const { guesses: { activeRow } } = state;
  const pegIds = state.guesses[activeRow].pegs;
  const pegColors = pegIds.map(id => state.pegs[id].color);
  const isSolved = matches(pegColors, state.solution.code);
  const feedback = generateFeedback(pegColors, state.solution.code);
  dispatch(changeFeedbackColors(feedback));
  if (isSolved) {
    dispatch(updateStatus('success'));
  }
};

export const showSolution = () => (dispatch, getState) => {
  const state = getState();
  const { game: { status } } = state;
  if (status === 'done') {
    dispatch(openShield());
  }
};

export const showResult = () => (dispatch, getState) => {
  const state = getState();
  const { game: { status } } = state;
  const { game: { result } } = state;
  if ((status === 'done') && (result === 'success')) {
    dispatch(showCongrats());
  }

  if ((status === 'done') && (result === 'failed')) {
    dispatch(showFailure());
  }
};

export const isCodeComplete = () => (dispatch, getState) => {
  const state = getState();
  const { guesses: { activeRow } } = state;
  const pegIds = state.guesses[activeRow].pegs;
  const pegColors = pegIds.map(i => state.pegs[i].color);
  const incomplete = pegColors.some(value => (value === '') || (value === 'transparent'));
  if (incomplete) {
    dispatch(showHelp());
  }
  return incomplete;
};

export const onUnlock = () => (dispatch) => {
  const incomplete = dispatch(isCodeComplete());
  if (!incomplete) {
    dispatch(disableCurrentRow());
    dispatch(giveFeedback());
    dispatch(enableNextRow());
    dispatch(showSolution());
    dispatch(showResult());
  }
};
