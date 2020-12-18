import { LogEvent } from './log-event';
import { LogEventCreator } from './log-event-creator';
import { LogEventPropertiesSchema, LogEventPropertiesSchemaType } from './log-event-properties-schema';
import { LogEventSeverity } from './log-event-severity';
import { LogGroup } from './log-group';

/**
 * Creates a log event creator
 * @param logGroup Log group
 * @param logId Log identifier
 * @param severity Severity
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
LogEventProperties extends object | undefined = undefined
>(
  logGroup: LogGroup<LogGroupName>,
  logId: LogEventId,
  severity: LogEventSeverity,
  message: string,
  properties?: LogEventPropertiesSchema<LogEventProperties>
): LogEventCreator<LogEvent<LogGroupName, LogEventId, LogEventProperties>> {
  const logCreator = (properties?: any): LogEvent<LogGroupName, LogEventId, LogEventProperties> => ({
    group: logGroup,
    logId,
    severity,
    message,
    properties
  });

  return Object.defineProperty(logCreator, 'type', {
    value: `${logGroup}.${logId}`,
    writable: false
  });
}
