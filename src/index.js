import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { rules } from './app/rules';
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
        <i onClick={handlers.subtractBreakLength(store)}>-</i>
        <span>{store.getState().breakLength}</span>
        <i onClick={handlers.addBreakLength(store)}>+</i>
      </div>

      <div>
        <div>SESSION LENGTH</div>
        <i onClick={handlers.subtractSessionLength(store)}>-</i>
        <span>{store.getState().sessionLength}</span>
        <i onClick={handlers.addSessionLength(store)}>+</i>
      </div>
    </div>

    <div className="circle" onClick={handlers.togglePaused(store)}>
      <div className={`background ${rules.isSession(store.getState()) ? 'green' : 'red'}`}></div>
      <div
        className="cover"
        style={{height: `${helpers.formatPercentage(store.getState())}`}}>
      </div>
      <div className="title">{store.getState().name}</div>
      <div className="timer">{helpers.formatTime(store.getState().time)}</div>
    </div>
  </div>,
  document.getElementById('pomodoro')
);

render();
store.subscribe(render);
