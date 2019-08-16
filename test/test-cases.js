const testCases = [
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

module.exports = {
  testCases,
};
