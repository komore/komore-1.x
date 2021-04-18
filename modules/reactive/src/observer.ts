import type { CompletionObserver as RxjsCompletionObserver, ErrorObserver as RxjsErrorObserver, NextObserver, Observer as RxjsObserver } from 'rxjs';

/**
 * Observer
 * @template T Value type
 */
export type Observer<T> = RxjsObserver<T>;

/**
 * Value observer
 * @template T Value type
 */
export type ValueObserver<T> = NextObserver<T>;

/**
 * Error observer
 * @template T Value type
 */
export type ErrorObserver<T> = RxjsErrorObserver<T>;

/**
 * Completion observer
 * @template T Value type
 */
export type CompletionObserver<T> = RxjsCompletionObserver<T>;
