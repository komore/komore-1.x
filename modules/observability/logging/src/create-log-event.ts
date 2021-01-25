import { LogEvent } from './log-event';
import { LogEventCreator } from './log-event-creator';
import { LogEventPropertiesSchema } from './log-event-properties-schema';
import { LogEventSeverity } from './log-event-severity';
import { LogGroup } from './log-group';

export function createLogEvent<LogGroupName extends string, LogEventId extends number>(
  logGroup: LogGroup<LogGroupName>, logEventId: LogEventId, logEventSeverity: LogEventSeverity, message: string, properties?: )


/**
 * Creates a log event creator
 * @param logGroup Log group
 * @param logEventId Log event identifier
 * @param logEventSeverity Log event severity
 * @param message Message
 * @param properties Properties
 * @returns Log creator
 * @template LogGroupName Log group name
 * @template LogId Log identifier
 * @template LogPropertiesType Log properties type
 */
export function createLogEvent<
  LogGroupName extends string,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventProperties extends object | undefined = undefined
>(
  logGroup: LogGroup<LogGroupName>,
  logEventId: LogEventId,
  logEventSeverity: LogEventSeverity,
  message: LogEventMessage,
  properties?: LogEventPropertiesSchema<LogEventProperties>
): LogEventCreator<LogEvent<LogGroupName, LogEventId, LogEventProperties>> {
  const logCreator = (properties?: any): LogEvent<LogGroupName, LogEventId, LogEventProperties> => ({
    group: logGroup,
    logId: logEventId,
    severity: logEventSeverity,
    message,
    properties
  });

  return Object.defineProperty(logCreator, 'type', {
    value: `${logGroup}.${logEventId}`,
    writable: false
  });
}
