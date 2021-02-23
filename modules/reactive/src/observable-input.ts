import type { ObservableInput as RxjsObservableInput } from 'rxjs';

/**
 * Value type that can be converted to an observable
 * @template T Value type
 */
export type ObservableInput<T> = RxjsObservableInput<T>;

/**
 * Observable input tuple
 * @tempate T Object type
 */
export type ObservableInputTuple<T> = {
  [K in keyof T]: ObservableInput<T[K]>;
};

/**
 * Extracts the type from an observable input
 * @template O Observable input type
 */
export type ObservableInputType<O> = O extends ObservableInput<infer T> ? T : never;
