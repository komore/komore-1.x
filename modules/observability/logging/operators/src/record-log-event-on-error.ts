import type { UntypedLogEvent, UntypedLogEventCreator } from '@komore/observability/logging';
import { recordLogEvent } from '@komore/observability/logging';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tapError } from '@komore/reactive/operators';

/**
 * Records a log event when the source observable emits an error
 *
 * The log event creator is used to create a log event, passing the creator the error again, e.g.
 * ```ts
 * const logEventCreator = factory(error);
 * const logEvent = logEventCreator(error);
 * ```
 * @param factory Factory that returns a log event creator based on the error
 * @template T Value type
 */
export function recordLogEventOnError<T>(
  factory: (error: unknown) => UntypedLogEventCreator
): MonoTypeOperatorFunction<T>;

/**
 * Records a log event when the source observable emits an error
 * @param factory Factory that returns a log event based on the error
 * @template T Value type
 */
export function recordLogEventOnError<T>(factory: (error: unknown) => UntypedLogEvent): MonoTypeOperatorFunction<T>;

export function recordLogEventOnError<T>(
  factory: (error: unknown) => UntypedLogEvent | UntypedLogEventCreator
): MonoTypeOperatorFunction<T> {
  return tapError(error => {
    const logEventOrCreator = factory(error);
    const logEvent = logEventOrCreator instanceof Function ? logEventOrCreator(error) : logEventOrCreator;
    recordLogEvent(logEvent);
  });
}
