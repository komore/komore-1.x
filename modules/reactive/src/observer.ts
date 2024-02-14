/**
 * Observer
 *
 * @template T Value type
 */
export interface Observer<T> {
  next(value: T): void;
  error(err: unknown): void;
  complete(): void;
}
