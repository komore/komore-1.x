import type { ObservableInput } from './observable-input';

/**
 * Observable input tuple
 * @tempate T Object type
 */
export type ObservableInputTuple<T> = {
  [K in keyof T]: ObservableInput<T[K]>;
};
