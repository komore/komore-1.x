import { type ObservableInput as RxjsObservableInput } from 'rxjs';

/**
 * Value type that can be converted to an observable
 * @template T Value type
 */
export type ObservableInput<T> = RxjsObservableInput<T>;
