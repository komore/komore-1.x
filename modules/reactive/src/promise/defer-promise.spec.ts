import { deferPromise } from './defer-promise';

describe('Defer promise', () => {
  it('todo', () => {
    deferPromise(() => Promise.resolve(42));
  });
});
