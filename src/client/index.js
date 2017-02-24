
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';

let initialState = window.__INITIAL_STATE__;

const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState);

const root = document.querySelector('#root');

const mount = (RootComponent) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <RootComponent />
      </AppContainer>
    </Provider>,
    root
  );
};

if (module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line global-require,import/newline-after-import
    const RootComponent = require('./Root').default;
    mount(RootComponent);
  });
}

mount(Root);
