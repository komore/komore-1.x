import { EMPTY, Observable, throwError } from '@komore/reactive';
import { tapCompletion } from './tap-completion';

describe('Tap completion', () => {
  const completionObserver = jest.fn();

  beforeEach(() => {
    completionObserver.mockClear();
  });

  it('calls the completion observer when the observable completes', () => {
    given: 'a source observable that completes';
    const source$ = EMPTY;
    when: 'passing the source observable';
    const operatorFunction = tapCompletion(completionObserver);
    const observable$ = operatorFunction(source$);
    and: 'subscribing to the new observable';
    observable$.subscribe();
    expect: 'the completion observer to have been called';
    expect(completionObserver).toHaveBeenCalledTimes(1);
  });

  describe('does not call the completion observer when the observable', () => {
    test('emits a value', () => {
      given: 'an observable that emits';
      const source$ = new Observable<number>(observer => observer.next(42));
      when: 'passing the source observable';
      const operatorFunction = tapCompletion(completionObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the completion observer not to have been called';
      expect(completionObserver).not.toHaveBeenCalled();
    });

    test('errors', () => {
      given: 'an observable that errors';
      const source$ = throwError(() => new Error('test'));
      when: 'passing the source observable';
      const operatorFunction = tapCompletion(completionObserver);
      const observable$ = operatorFunction(source$);
      and: 'subscribing to the new observable';
      observable$.subscribe();
      expect: 'the completion observer not to have been called';
      expect(completionObserver).not.toHaveBeenCalled();
    });
  });
});
