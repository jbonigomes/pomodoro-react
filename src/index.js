import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { helpers } from './app/helpers';
import { handlers } from './app/handlers';
import { pomodoro } from './app/reducers';

const initialState = {
  time: 25 * 60,
  breakLength: 5,
  sessionLength: 25,

  intervalID: null,

  name: 'Session',
};

const store = createStore(pomodoro, initialState);

const render = () => ReactDOM.render(
  <div className="pomodoro">
    <div className="controls">
      <div>
        <div>BREAK LENGTH</div>
        <span
          className="subtract-break-length"
          onClick={handlers.subtractBreakLength(store)}>
          -
        </span>
        <span className="b-len">{store.getState().breakLength}</span>
        <span
          className="add-break-length"
          onClick={handlers.addBreakLength(store)}>
          +
        </span>
      </div>

      <div>
        <div>SESSION LENGTH</div>
        <span
          className="subtract-session-length"
          onClick={handlers.subtractSessionLength(store)}>
          -
        </span>
        <span className="s-len">{store.getState().sessionLength}</span>
        <span
          className="add-session-length"
          onClick={handlers.addSessionLength(store)}>
          +
        </span>
      </div>
    </div>

    <div className="circle">
      <div className="background"></div>
      <div className="cover"></div>
      <div className="title">{store.getState().name}</div>
      <div className="timer">{helpers.formatTime(store.getState().time)}</div>
      <div className="toggle-paused" onClick={handlers.togglePaused(store)}></div>
    </div>
  </div>,
  document.getElementById('pomodoro')
);

render();
store.subscribe(render);
