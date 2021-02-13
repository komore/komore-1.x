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
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventProperties extends Record<string, unknown> | undefined = undefined
> {
  readonly error?: unknown;
  readonly group: LogGroupType;
  readonly id: LogEventId;
  readonly message: LogEventMessage;
  readonly properties: LogEventProperties extends Record<string, unknown> ? LogEventProperties : never;
  readonly severity: LogEventSeverity;
  readonly timestamp: Date;
}

/**
 * Log event identifier
 * @template LogType Log type
 */
export type LogEventId<LogEventType extends LogEvent<LogGroup<string>, any, any, any>> = LogEventType extends LogEvent<any, infer LogEventId, any> ? LogEventId : never;

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

/**
 * Untyped log event
 */
export type UntypedLogEvent = LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>;
