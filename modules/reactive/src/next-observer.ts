/**
 * Next observer
 * @template T Value type
 */
export type NextObserver<T> = ((value: T) => void) | { next(value: T): void };
