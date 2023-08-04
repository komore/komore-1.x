import { type LogEvent } from './event/log-event';
import { type UntypedLogEventCreator } from './event/log-event-creator';
import { type LogGroup } from './group/log-group';
import { type Logger } from './logger';

/**
 * Returns a function that, when called, creates a new log event record and records it
 *
 * @param logger Logger
 * @param logEventCreator Log event creator
 * @returns Function that, when called, creates a new log event record and records it
 * @template T Value type
 */
export function toLog<T>(logger: Logger, logEventCreator: UntypedLogEventCreator): (value: T) => void;

/**
 * Returns a function that projects each emitted value to a log event then records it
 *
 * @param logger Logger
 * @param project Function that returns a log event from an emitted value
 * @returns Function that projects each emitted value to a log event then records it
 * @template T Value type
 * @template LogEventType Log event type
 */
export function toLog<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(logger: Logger, project: (value: T) => LogEventType): (value: T) => void;

export function toLog<
  T,
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(logger: Logger, project: (value: T) => LogEventType): (value: T) => void {
  return value => {
    const logEvent = project(value);
    logger(logEvent);
  };
}
