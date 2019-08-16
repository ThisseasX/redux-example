const { handleActions } = require('./redux-utils');

const uiReducer = handleActions(
  {
    START_LOADING: state => ({
      ...state,
      loading: true,
    }),
    STOP_LOADING: state => ({
      ...state,
      loading: false,
    }),
    UPDATE_SELECTED: (state, { payload }) => ({
      ...state,
      selected: payload,
    }),
  },
  { loading: false, selected: 0 },
);

const itemReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

module.exports = {
  uiReducer,
  itemReducer,
};
