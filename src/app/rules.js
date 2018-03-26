export const rules = {
  isPaused: (state) => !state.intervalID,
  isSession: (state) => state.name === 'Session',

  canSubtractTime: (state) => state.time > 0,

  canAddBreakLength: (state) => !state.intervalID && state.breakLength < 120,
  canSubtractBreakLength: (state) => !state.intervalID && state.breakLength > 1,

  canAddSessionLength: (state) => !state.intervalID && state.sessionLength < 120,
  canSubtractSessionLength: (state) => !state.intervalID && state.sessionLength > 1,
};
