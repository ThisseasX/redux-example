const createStore = (rootReducer, preloadedState) => {
  let state = rootReducer(preloadedState, {});
  let subscribers = [];

  const subscribe = sub => {
    subscribers.push(sub);
    return () => {
      subscribers = subscribers.filter(s => s !== sub);
    };
  };

  const dispatch = action => {
    state = rootReducer(state, action);
    subscribers.forEach(s => s());
  };

  const getState = () => state;

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const combineReducers = reducers => (state = {}, action) =>
  Object.entries(reducers).reduce(
    (newState, [reducerName, reducer]) => ({
      ...newState,
      [reducerName]: reducer(state[reducerName], action),
    }),
    {},
  );

const handleActions = (actions, initialState) => (
  state = initialState,
  action,
) => {
  const reducer = actions[action.type];
  return reducer ? reducer(state, action) : state;
};

module.exports = {
  createStore,
  combineReducers,
  handleActions,
};
