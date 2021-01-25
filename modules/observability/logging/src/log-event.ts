import type { LogEventPropertiesSchema } from './log-event-properties-schema';
import type { LogEventSeverity } from './log-event-severity';
import type { LogGroup } from './log-group';

/**
 * Log event
 * @template LogGroupName Log group name
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 * @template LogEventPropertiesSchema Log event properties schema
 */
export interface LogEvent<
  LogGroupType extends LogGroup<any>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventProperties extends object | undefined = undefined
> {
  readonly group: LogGroupType;
  readonly id: LogEventId;
  readonly severity: LogEventSeverity;
  readonly message: LogEventMessage;
  readonly properties: LogEventProperties extends object ? LogEventPropertiesSchema<LogEventProperties> : never;
}

/**
 * Log event identifier
 * @template LogType Log type
 */
export type LogEventId<LogEventType extends LogEvent<any, any, any, any>> = LogEventType extends LogEvent<any, infer LogEventId, any> ? LogEventId : never;

/**
 * Log event properties schema
 * @template LogEventType Log event type
 */
export type LogEventPropertiesSchemaType<LogEventType extends LogEvent<any, any, any, any>> = LogEventType extends LogEvent<
  any,
  any,
  any,
  infer LogEventPropertiesSchema
>
  ? LogEventPropertiesSchema
  : never;
