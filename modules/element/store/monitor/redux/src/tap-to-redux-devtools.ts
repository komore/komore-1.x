import { identity } from '@komore/functional';
import { type MonoTypeOperatorFunction, Observable } from '@komore/reactive';
import { getReduxDevtoolsExtension } from './get-redux-devtools-extension';
import { type ReduxDevtoolsOptions } from './redux-devtools-options';

/**
 * Creates a redux devtools monitor
 * @param options Redux devtools options
 * @template T Value type
 */
export function tapToReduxDevtools<T>(options: ReduxDevtoolsOptions): MonoTypeOperatorFunction<T> {
  const reduxDevtoolsExtension = getReduxDevtoolsExtension();
  if (reduxDevtoolsExtension === undefined) {
    return identity;
  }

  return function <T>(source: Observable<T>) {
    return new Observable<T>(observer => {
      const reduxDevtoolsConnection = reduxDevtoolsExtension.connect(options);
      // TODO: set the name
      //reduxDevtoolsConnection.init();
      const subscription = source.subscribe({
        next(value) {
          // TODO: pass action and state
          console.log('action and state', value);
          reduxDevtoolsConnection.send(value, undefined);
        },
        error(error) {
          reduxDevtoolsConnection.error(error);
          observer.error(error);
        },
        complete() {
          observer.complete();
        }
      });

      subscription.add(() => reduxDevtoolsConnection.unsubscribe());
      observer.add(subscription);
    });
  };
}
