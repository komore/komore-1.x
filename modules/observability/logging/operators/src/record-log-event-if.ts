import type { LogEvent, LogGroup } from '@komore/observability/logging';
import { recordLogEvent } from '@komore/observability/logging';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tapValueIf } from '@komore/reactive/operators';

/**
 * Records a log event when a condition is met
 * @param predicate Condition predicate
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template LogEventType Log event type
 */
export function recordLogEventIf<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (value: T) => boolean, logEvent: LogEventType): MonoTypeOperatorFunction<T>;

/**
 * Records a log event when a condition is met, building the log event from the emitted value
 * @param predicate Condition predicate
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template LogEventType Log event type
 */
export function recordLogEventIf<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (value: T) => boolean, project: (value: T) => LogEventType): MonoTypeOperatorFunction<T>;

/**
 * Records a log event when a condition is met, building the log event from the emitted value and asserting its type
 * @param predicate Condition predicate, asserting the value type
 * @param logEvent Log event
 * @returns Operator function that records a log event when the condition is met
 * @template T Value type
 * @template S Asserted value type
 * @template LogEventType Log event type
 */
export function recordLogEventIf<
  T,
  S extends T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(predicate: (value: T) => value is S, project: (value: S) => LogEventType): MonoTypeOperatorFunction<T>;
/*
export function recordLogEventIf<
  LogEventProperties extends Record<string, unknown>,
  T extends LogEventProperties,
  S extends T,
  LogEventCreatorType extends LogEventCreator<LogGroup<string>, number, string, LogEventProperties>
>(predicate: (value: T) => value is S, logEventCreator: LogEventCreatorType): MonoTypeOperatorFunction<T>;

export function recordLogEventIf<
  LogEventProperties extends Record<string, unknown>,
  T extends LogEventProperties,
  LogEventCreatorType extends LogEventCreator<LogGroup<string>, number, string, LogEventProperties>
>(predicate: (value: T) => boolean, logEventCreator: LogEventCreatorType): MonoTypeOperatorFunction<T>;

export function recordLogEventIf<
  T,
  LogEventCreatorType extends LogEventCreator<LogGroup<string>, number, string>
>(predicate: (value: T) => boolean, logEventCreator: LogEventCreatorType): MonoTypeOperatorFunction<T>;
*/
export function recordLogEventIf<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(
  predicate: (value: T) => boolean,
  logEventOrProject: LogEventType | ((value: T) => LogEventType)
): MonoTypeOperatorFunction<T> {
  return tapValueIf(predicate, value => {
    const logEvent = typeof logEventOrProject === 'function' ? logEventOrProject(value) : logEventOrProject;
    recordLogEvent(logEvent);
  });
}
