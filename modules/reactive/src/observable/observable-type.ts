import type { Observable } from './observable';

export type ObservableType<O extends Observable<unknown>> = O extends Observable<infer T> ? T : never;
