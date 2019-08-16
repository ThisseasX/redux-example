const { createStore, combineReducers } = require('./redux-utils');
const { uiReducer, itemReducer } = require('./reducers');

const rootReducer = combineReducers({
  ui: uiReducer,
  item: itemReducer,
});

const store = createStore(rootReducer);

console.log(store.state);
store.dispatch({ type: 'UPDATE_ITEMS', payload: 123 });
console.log(store.state);
store.dispatch({ type: 'UPDATE_SELECTED', payload: 7 });
console.log(store.state);
