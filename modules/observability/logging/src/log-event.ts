import { LogEventPropertiesSchemaType } from './log-event-properties-schema';
import { LogEventSeverity } from './log-event-severity';

/**
 * Log event
 * @template LogGroupName Log group name
 * @template LogEventId Log event identifier
 * @template LogEventPropertiesSchema Log event properties schema
 */
export type LogEvent<
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined = undefined
> = Readonly<{
  group: LogGroupName;
  id: LogEventId;
  severity: LogEventSeverity;
  message: string;
  properties: LogEventPropertiesSchemaType<LogEventPropertiesSchema>;
}>;

/**
 * Log event group name
 * @template LogEventType Log event type
 */
export type LogEventGroupName<LogEventType> = LogEventType extends LogEvent<infer LogEventGroupName, any, any>
  ? LogEventGroupName
  : never;

/**
 * Log event identifier
 * @template LogType Log type
 */
export type LogEventId<LogEventType> = LogEventType extends LogEvent<any, infer LogEventId, any> ? LogEventId : never;

/**
 * Log event properties schema
 * @template LogEventType Log event type
 */
export type LogEventPropertiesSchema<LogEventType> = LogEventType extends LogEvent<
  any,
  any,
  infer LogEventPropertiesSchema
>
  ? LogEventPropertiesSchema
  : never;
