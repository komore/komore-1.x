import { type LogEvent } from './event/log-event';
import { recordLogEvent } from './record-log-event';
import { type ValueToLogOptions } from './value-to-log-options';

/**
 * Returns a function that projects each emitted value to a log event then records it
 *
 * @param logger Logger
 * @param project Function that returns a log event from an emitted value
 * @returns Function that projects each emitted value to a log event then records it
 * @template T Value type
 * @template LogEventType Log event type
 */
export function valueToLog<T, LogEventType extends LogEvent>(
  project: (value: T) => LogEventType,
  options?: ValueToLogOptions
): (value: T) => void {
  const { logger = recordLogEvent } = options ?? {};
  return value => {
    const logEvent = project(value);
    logger(logEvent);
  };
}
