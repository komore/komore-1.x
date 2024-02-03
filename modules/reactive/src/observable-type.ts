/**
 * Observable type
 */
export type ObservableType<O extends Observable<unknown>> = O extends Observable<infer T> ? T : never;
