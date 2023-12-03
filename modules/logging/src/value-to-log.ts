import { type GenericLogEvent } from './event/generic-log-event';
import { type Logger } from './logger';
import { recordLogEvent } from './record-log-event';

/**
 * Returns a function that projects each emitted value to a log event then records it
 *
 * @param logger Logger
 * @param project Function that returns a log event from an emitted value
 * @returns Function that projects each emitted value to a log event then records it
 * @template T Value type
 * @template LogEventType Log event type
 */
export function valueToLog<T, LogEventType extends GenericLogEvent>(
  project: (value: T) => LogEventType,
  logger?: Logger
): (value: T) => void {
  return value => {
    const logEvent = project(value);
    (logger ?? recordLogEvent)(logEvent);
  };
}
