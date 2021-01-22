import { } from '@komore/observability/driver';
import { LogEvent } from './log-event';
import { LogEventPropertiesSchema, LogEventPropertiesSchemaType } from './log-event-properties-schema';

/**
 * Records a log event
 * @param logEvent Log event
 * @param logProperties Log event properties
 */
export function recordLogEvent<LogEventType extends LogEvent<any, any, any>>(
  logEvent: LogEventType,
  logProperties?: LogEventPropertiesSchemaType<LogEventPropertiesSchema<LogEventType>>
): void {
  console.log('log', logEvent, logProperties);
}
