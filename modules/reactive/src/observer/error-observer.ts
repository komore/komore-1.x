import type { ErrorObserver as RxjsErrorObserver } from 'rxjs';

/**
 * Error observer
 * @template T Value type
 */
export type ErrorObserver<T> = RxjsErrorObserver<T>;
