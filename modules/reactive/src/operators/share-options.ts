import { type Subject } from '../subject/subject';

/**
 * Share options
 *
 * @template T Value type
 */
export interface ShareOptions<T> {
  readonly connector?: () => Subject<T>;
  readonly resetOn?: {
    readonly complete?: boolean | (() => Observable<unknown>);
    readonly error?: boolean | ((error: unknown) => Observable<unknown>);
    readonly refCountZero?: boolean | (() => Observable<unknown>);
  };
}
