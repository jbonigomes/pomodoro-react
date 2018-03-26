export const pomodoro = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, { name: action.name });

    case 'SET_TIME':
      return Object.assign({}, state, { time: action.time });

    case 'SET_INTERVAL_ID':
      return Object.assign({}, state, { intervalID: action.intervalID });

    case 'ADD_BREAK_LENGTH':
      return Object.assign({}, state, { breakLength: state.breakLength + 1 });

    case 'SUBTRACT_BREAK_LENGTH':
      return Object.assign({}, state, { breakLength: state.breakLength - 1 });

    case 'ADD_SESSION_LENGTH':
      return Object.assign({}, state, { sessionLength: state.sessionLength + 1 });

    case 'SUBTRACT_SESSION_LENGTH':
      return Object.assign({}, state, { sessionLength: state.sessionLength - 1 });

    default:
      return state;
  }
};
