/**
 * Observable tuple
 *
 * @tempate T Object type
 */
export type ObservableTuple<T> = {
  readonly [K in keyof T]: Observable<T[K]>;
};
