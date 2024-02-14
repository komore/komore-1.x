/**
 * Value type that can be converted to an observable
 *
 * @template T Value type
 */
export type ObservableInput<T> = AsyncIterable<T> | Observable<T> | PromiseLike<T> | ArrayLike<T> | Iterable<T>;
