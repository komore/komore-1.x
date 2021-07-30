import type { LogEvent, LogGroup } from '@komore/observability/logging';
import { recordLogEvent } from '@komore/observability/logging';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from '@komore/reactive/operators';

/**
 * Records a log event when an error condition is met
 * @param predicate Condition predicate
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template LogEventType Log event type
 */
export function recordLogEventIfError<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (error: T) => boolean, logEvent: LogEventType): MonoTypeOperatorFunction<T>;

/**
 * Records a log event when a condition is met, building the log event from the error
 * @param predicate Condition predicate
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template LogEventType Log event type
 */
export function recordLogEventIfError<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (error: unknown) => boolean, project: (error: unknown) => LogEventType): MonoTypeOperatorFunction<T>;

/**
 * Records a log event when an error condition is met, building the log event from the error and asserting its type
 * @param predicate Condition predicate, asserting the value type
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template S Asserted error type
 * @template LogEventType Log event type
 */
export function recordLogEventIfError<
  T,
  S,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (error: unknown) => error is S, project: (error: S) => LogEventType): MonoTypeOperatorFunction<T>;

export function recordLogEventIfError<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(
  predicate: (error: unknown) => boolean,
  logEventOrProject: LogEventType | ((error: unknown) => LogEventType)
): MonoTypeOperatorFunction<T> {
  return tap({
    error(value: unknown) {
      if (predicate(value)) {
        const logEvent = typeof logEventOrProject === 'function' ? logEventOrProject(value) : logEventOrProject;
        recordLogEvent(logEvent);
      }
    }
  });
}
