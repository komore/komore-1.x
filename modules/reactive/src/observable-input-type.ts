import { type ObservableInput } from './observable-input';

/**
 * Extracts the type from an observable input
 *
 * @template O Observable input type
 */
export type ObservableInputType<O> = O extends ObservableInput<infer T> ? T : never;
