const createStore = (rootReducer, preloadedState) => {
  let state = rootReducer(preloadedState, {});
  const dispatch = action => {
    state = rootReducer(state, action);
  };

  return {
    get state() {
      return state;
    },
    dispatch,
  };
};

const combineReducers = reducers => (state, action) =>
  Object.entries(reducers).reduce(
    (outState, [reducerName, reducer]) => ({
      ...outState,
      [reducerName]: {
        ...reducer(outState && outState[reducerName], action),
      },
    }),
    state,
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