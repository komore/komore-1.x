import { type LogEvent } from './log-event';
import { type LogEventCreator } from './log-event-creator';
import { type LogEventPropertiesSchema } from './log-event-properties-schema';
import { type LogEventSeverity } from './log-event-severity';
import { type LogGroup } from '../group/log-group';

/**
 * Creates a log event creator
 *
 * @param logGroup Log group
 * @param logEventId Log event identifier
 * @param severity Log event severity
 * @param message Log event message
 * @returns Log event creator
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 */
export function createLogEvent<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string
>(
  logGroup: LogGroupType,
  logEventId: LogEventId,
  severity: LogEventSeverity,
  message: LogEventMessage
): LogEventCreator<LogGroupType, LogEventId, LogEventMessage>;

/**
 * Creates a log event creator
 *
 * @param logGroup Log group
 * @param logEventId Log event identifier
 * @param severity Log event severity
 * @param message Log event message
 * @param properties Log event properties
 * @returns Log event creator
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 * @template LogEventProperties Log event properties schema
 */
export function createLogEvent<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventProperties extends Record<string, unknown>
>(
  logGroup: LogGroupType,
  logEventId: LogEventId,
  severity: LogEventSeverity,
  message: LogEventMessage,
  properties: LogEventPropertiesSchema<LogEventProperties>
): LogEventCreator<LogGroupType, LogEventId, LogEventMessage, LogEventProperties>;

/**
 * Creates a log event creator
 *
 * @param logGroup Log group
 * @param logEventId Log event identifier
 * @param logEventSeverity Log event severity
 * @param message Message
 * @param properties Properties
 * @returns Log creator
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 * @template LogEventPropertiesSchema Log event properties schema
 */
export function createLogEvent<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventProperties extends Record<string, unknown> | undefined = undefined
>(
  group: LogGroupType,
  id: LogEventId,
  severity: LogEventSeverity,
  message: LogEventMessage,
  _properties?: LogEventProperties extends Record<string, unknown>
    ? LogEventPropertiesSchema<LogEventProperties>
    : never
): LogEventCreator<LogGroupType, LogEventId, LogEventMessage, LogEventProperties> {
  const logEventBase: Omit<LogEvent<LogGroupType, LogEventId, LogEventMessage>, 'properties' | 'timestamp'> = {
    group,
    id,
    severity,
    message,
  };

  const logCreator = (
    properties?: LogEventProperties
  ): LogEvent<LogGroupType, LogEventId, LogEventMessage, LogEventProperties> => ({
    ...logEventBase,
    properties: properties as LogEvent<LogGroupType, LogEventId, LogEventMessage, LogEventProperties>['properties'],
  });

  return Object.defineProperty(logCreator, 'type', {
    value: `${group.name}.${id}`,
    writable: false,
  }) as LogEventCreator<LogGroupType, LogEventId, LogEventMessage, LogEventProperties>;
}
