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

  return {
    getState: () => state,
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
  const actionReducerMap = new Map(Object.entries(actions));
  const reducer = actionReducerMap.get(action.type);

  return reducer ? reducer(state, action) : state;
};

module.exports = {
  createStore,
  combineReducers,
  handleActions,
};
