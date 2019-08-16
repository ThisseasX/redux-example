const { uiReducer, itemReducer } = require('../src/reducers');
const { createStore, combineReducers } = require('../src/redux-utils');
const assert = require('assert');
const forEach = require('mocha-each');

const rootReducer = combineReducers({
  ui: uiReducer,
  item: itemReducer,
});

const params = [
  [
    {},
    {},
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
  ],
  [
    {},
    { type: 'UPDATE_ITEMS', payload: [1, 2, 3, 4] },
    {
      ui: { loading: false, selected: 0 },
      item: { items: [1, 2, 3, 4] },
    },
  ],
  [
    undefined,
    {},
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
  ],
  [
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
    { type: 'START_LOADING' },
    {
      ui: { loading: true, selected: 0 },
      item: { items: [] },
    },
  ],
  [
    {
      ui: { loading: true, selected: 0 },
      item: { items: [] },
    },
    { type: 'STOP_LOADING' },
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
  ],
  [
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
    { type: 'UPDATE_ITEMS', payload: [5, 6, 7, 8] },
    {
      ui: { loading: false, selected: 0 },
      item: { items: [5, 6, 7, 8] },
    },
  ],
  [
    {
      ui: { loading: false, selected: 0 },
      item: { items: [] },
    },
    { type: 'UPDATE_SELECTED', payload: 17 },
    {
      ui: { loading: false, selected: 17 },
      item: { items: [] },
    },
  ],
  [
    {
      ui: { loading: true, selected: 0 },
      item: { items: [] },
    },
    { type: 'UPDATE_SELECTED', payload: 17 },
    {
      ui: { loading: true, selected: 17 },
      item: { items: [] },
    },
  ],
];

describe('combineReducers', () => {
  forEach(params).it(
    'with state: %j and action: %j returns state: %j',
    (state, action, expected) => {
      const store = createStore(rootReducer, state);
      store.dispatch(action);
      assert.deepEqual(store.state, expected);
    },
  );
});
