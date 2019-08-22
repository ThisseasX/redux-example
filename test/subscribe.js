const { createStore } = require('../src/redux-utils');
const { equal } = require('assert');

describe('subscribe', () => {
  it('successfully notifies subscribers on each dispatch', () => {
    const store = createStore(() => {});
    let i = 0;

    store.subscribe(() => i++);
    store.subscribe(() => i++);
    store.subscribe(() => i++);

    store.dispatch({});
    store.dispatch({});

    equal(i, 6);
  });
});

describe('unsubscribe', () => {
  it('successfully unsubscribes', () => {
    const store = createStore(() => {});
    let i = 0;

    const unsub1 = store.subscribe(() => i++);
    const unsub2 = store.subscribe(() => i++);
    store.subscribe(() => i++);

    store.dispatch({});

    unsub1();
    unsub2();

    store.dispatch({});

    equal(i, 4);
  });
});
