import type { MonoTypeOperatorFunction } from 'rxjs';
import { identity, Observable } from 'rxjs';
import { getReduxDevtoolsExtension } from '../get-redux-devtools-extension';
import type { ReduxDevtoolsOptions } from '../redux-devtools-options';

/**
 * Creates a redux devtools monitor
 */
export function withReduxDevtoolsMonitor<T>(options: ReduxDevtoolsOptions): MonoTypeOperatorFunction<T> {
  const reduxDevtoolsExtension = getReduxDevtoolsExtension();
  if (reduxDevtoolsExtension === undefined) {
    return identity;
  }

  return function<T>(source: Observable<T>) {
    return new Observable<T>(observer => {
      const reduxDevtoolsConnection = reduxDevtoolsExtension.connect(options);
      const subscription = source.subscribe({
        next(value) {
          // TODO: pass action and state
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

      // TODO: how to disconnect/release?
      // subscription.add(() => reduxDevtoolsConnection.)
      return () => subscription.unsubscribe();
    });
  }
}
