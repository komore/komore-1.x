import type { Message } from '@komore/message'; // TODO: why does it have to be a message though?
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from '@komore/reactive/operators';
import type { LogEvent } from '../log-event';
import type { LogEventCreator } from '../log-event-creator';
import type { LogEventPropertiesSchemaType } from '../log-event-properties-schema';
import { recordLogEvent } from '../record-log-event';

/**
 * Operator function that records a log
 * @param project Projection function that builds the log
 * @template MessageType Message type
 * @template LogGroupName Log group name
 * @template LogId Log identifier
 * @template LogPropertiesSchema Log properties schema
 * @template LogType Log type
 */
export function recordLogEvent<
  MessageType extends Message<any, any, any, any>,
  LogGroupName extends string,
  LogId extends number,
  LogPropertiesSchema extends object | undefined,
  LogType extends LogEvent<LogGroupName, LogId, LogPropertiesSchema>
>(project: (message: MessageType) => LogType): MonoTypeOperatorFunction<MessageType>;

/**
 * Operator function that records a log
 * @param logCreator Log creator
 * @param projectProperties Projection function that builds the log properties
 * @template MessageType Message type
 * @template LogGroupName Log group name
 * @template LogEventId Log identifier
 * @template LogEventPropertiesSchema Log properties schema
 * @template LogEventType Log type
 */
export function recordLogEvent<
  MessageType extends Message<any, any, any, any>,
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined,
  LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>
>(
  logEventCreator: LogEventCreator<LogEventType>,
  projectProperties: (message: MessageType) => LogEventPropertiesSchemaType<LogEventPropertiesSchema>
): MonoTypeOperatorFunction<MessageType>;

export function recordLogEvent<
  MessageType extends Message<any, any, any, any>,
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined,
  LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>
>(
  projectOrLogCreator:
    | ((message: MessageType) => LogEventType)
    | LogEventCreator<LogGroupName, LogEventId, LogEventPropertiesSchema, LogEventType>,
  projectProperties?: (message: MessageType) => LogEventPropertiesSchemaType<LogEventPropertiesSchema>
): MonoTypeOperatorFunction<MessageType> {
  if (projectProperties !== undefined) {
    const logCreator = projectOrLogCreator as LogEventCreator<LogGroupName, LogEventId, LogEventPropertiesSchema, LogEventType>;
    return tap(message => {
      const logEventProperties = projectProperties(message);
      const logWithProperties = logCreator(logEventProperties);
      recordLogEvent(logWithProperties);
    });
  }

  const logProject = projectOrLogCreator as (message: MessageType) => LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>;
  return tap({
    next(message) {
      recordLogEvent(logProject(message));
    }
  });
}
