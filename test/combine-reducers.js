const { uiReducer, itemReducer } = require('../src/reducers');
const { createStore, combineReducers } = require('../src/redux-utils');
const { deepEqual } = require('assert');
const withThese = require('mocha-each');
const { testCases } = require('./combine-reducers-cases');

const rootReducer = combineReducers({
  ui: uiReducer,
  item: itemReducer,
});

describe('combineReducers', () => {
  withThese(testCases).it(
    'with state: %j and action: %j returns state: %j',
    (state, action, expected) => {
      const store = createStore(rootReducer, state);
      store.dispatch(action);
      deepEqual(store.getState(), expected);
    },
  );
});
