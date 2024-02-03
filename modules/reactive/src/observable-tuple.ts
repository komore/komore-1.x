/**
 * Observable tuple
 *
 * @tempate T Object type
 */
export type ObservableTuple<T> = {
  [K in keyof T]: Observable<T[K]>;
};
