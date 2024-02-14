import { feature } from '@komore/testing';

import { empty } from '../creation/empty';
import { throwError } from '../creation/throw-error';
import { ReplaySubject } from '../subject/replay-subject';
import { tapNext } from './tap-next';

feature('Tap next', () => {
  const nextObserver = jest.fn();

  beforeEach(() => {
    nextObserver.mockClear();
  });

  it('calls the next observer when the observable emits', () => {
    given: 'an observable that emits values';
    const value1 = 42;
    const value2 = 64;
    const source$ = new ReplaySubject<number>(2);
    source$.next(value1);
    source$.next(value2);
    when: 'passing the source observable';
    const operatorFunction = tapNext(nextObserver);
    const observable$ = operatorFunction(source$);
    and: 'subscribing to the new observable';
    observable$.subscribe();
    expect: 'the value observer to have been called with each emitted value';
    expect(nextObserver).toHaveBeenNthCalledWith(1, value1);
    expect(nextObserver).toHaveBeenNthCalledWith(2, value2);
  });

  describe('does not call the completion observer when the observable', () => {
    test('completes', () => {
      given: 'a source observable that completes';
      const source$ = empty;
      when: 'passing the source observable';
      const operatorFunction = tapNext(nextObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the value observer not to have been called';
      expect(nextObserver).not.toHaveBeenCalled();
    });

    test('errors', () => {
      given: 'an observable that errors';
      const source$ = throwError(() => new Error('test'));
      when: 'passing the source observable';
      const operatorFunction = tapNext(nextObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the value observer not to have been called';
      expect(nextObserver).not.toHaveBeenCalled();
    });
  });
});
