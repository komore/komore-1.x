import { type LogGroup } from '../group/log-group';
import { type LogEventSeverity } from './log-event-severity';

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
}

/**
 * Log event properties schema
 * @template LogEventType Log event type
 */
export type LogEventPropertiesSchemaType<
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
> = LogEventType extends LogEvent<LogGroup<string>, number, string, infer LogEventPropertiesSchema>
  ? LogEventPropertiesSchema
  : never;

/**
 * Untyped log event
 */
export type UntypedLogEvent = LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>;
