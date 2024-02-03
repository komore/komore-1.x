import { type TimeoutInfo } from './timeout-info';

/**
 * Timeout options
 *
 * @template T Value type
 * @template O Observable type being switched to in case of error
 */
export type TimeoutOptions<T, O extends Observable<unknown> = Observable<T>> = {
  /**
   * Factory used to create an observable to switch to, when a timeout occurs
   */
  readonly with?: (info: TimeoutInfo<T>) => O;
} & (
  | {
      /**
       * Time allowed between values from the source before a timeout is triggered
       */
      readonly each?: Temporal.Duration;
      /**
       * Initial delay or first date and time by which the first value must arrive from the source
       */
      readonly first: Temporal.Duration | Temporal.PlainDateTime;
    }
  | {
      /**
       * Time allowed between values from the source before a timeout is triggered
       */
      readonly each: Temporal.Duration;
    }
);
