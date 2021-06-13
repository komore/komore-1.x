import type { ReduxDevtoolsOptions } from '@komore/element-redux-store-monitor';
import { getReduxDevtoolsExtension } from '@komore/element-redux-store-monitor';
import { identity } from '@komore/functional';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { Observable } from '@komore/reactive';

/**
 * Creates a redux devtools monitor
 * @param options Redux devtools options
 * @template T Value type
 */
export function withReduxDevtoolsMonitor<T>(options: ReduxDevtoolsOptions): MonoTypeOperatorFunction<T> {
  const reduxDevtoolsExtension = getReduxDevtoolsExtension();
  if (reduxDevtoolsExtension === undefined) {
    return identity;
  }

  return function <T>(source: Observable<T>) {
    return new Observable<T>(observer => {
      const reduxDevtoolsConnection = reduxDevtoolsExtension.connect(options);
      // TODO: set the name
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

      return () => subscription.unsubscribe();
    });
  };
}
