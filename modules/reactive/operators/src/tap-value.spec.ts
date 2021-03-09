import { EMPTY, ReplaySubject, throwError } from '@komore/reactive';
import { tapValue } from './tap-value';

describe('Tap value', () => {
  const valueObserver = jest.fn();

  beforeEach(() => {
    valueObserver.mockClear();
  });

  it('calls the value observer when the observable emits a value', () => {
    given: 'an observable that emits values';
    const value1 = 42;
    const value2 = 64;
    const source$ = new ReplaySubject<number>(2);
    source$.next(value1);
    source$.next(value2);
    when: 'passing the source observable';
    const operatorFunction = tapValue(valueObserver);
    const observable$ = operatorFunction(source$);
    and: 'subscribing to the new observable';
    observable$.subscribe();
    expect: 'the value observer to have been called with each emitted value';
    expect(valueObserver).toHaveBeenNthCalledWith(1, value1);
    expect(valueObserver).toHaveBeenNthCalledWith(2, value2);
  });

  describe('does not call the completion observer when the observable', () => {
    test('completes', () => {
      given: 'a source observable that completes';
      const source$ = EMPTY;
      when: 'passing the source observable';
      const operatorFunction = tapValue(valueObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the value observer not to have been called';
      expect(valueObserver).not.toHaveBeenCalled();
    });

    test('errors', () => {
      given: 'an observable that errors';
      const source$ = throwError(() => new Error('test'));
      when: 'passing the source observable';
      const operatorFunction = tapValue(valueObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the value observer not to have been called';
      expect(valueObserver).not.toHaveBeenCalled();
    });
  });
});
