import { EMPTY, ReplaySubject, throwError } from '@komore/reactive';
import { tapValueIf } from './tap-value-if';

describe('Tap value if', () => {
  const valueObserver = jest.fn();
  const predicate = jest.fn((value: number) => value > 50);

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
    const operatorFunction = tapValueIf<number>(predicate, valueObserver);
    const observable$ = operatorFunction(source$);
    and: 'subscribing to the new observable';
    observable$.subscribe();
    expect: 'the value observer to have been called only for the values that pass the filter';
    expect(valueObserver).toHaveBeenCalledTimes(1);
    expect(valueObserver).toHaveBeenCalledWith(value2);
    and: 'the predicate to have been called for each value';
    expect(predicate).toHaveBeenCalledTimes(2);
    expect(predicate).toHaveBeenNthCalledWith(1, value1);
    expect(predicate).toHaveBeenNthCalledWith(2, value2);
  });

  describe('does not call the completion observer when the observable', () => {
    test('completes', () => {
      given: 'a source observable that completes';
      const source$ = EMPTY;
      when: 'passing the source observable';
      const operatorFunction = tapValueIf(predicate, valueObserver);
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
      const operatorFunction = tapValueIf(predicate, valueObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the value observer not to have been called';
      expect(valueObserver).not.toHaveBeenCalled();
    });
  });
});
