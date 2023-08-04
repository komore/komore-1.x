import { type LogGroup } from '../group/log-group';
import { type LogGroupName } from '../group/log-group-name';
import { type LogEvent } from './log-event';

/**
 * Log event with properties creator function type
 *
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 * @template LogEventPropertiesSchema Log event properties schema
 */
interface LogEventWithPropertiesCreatorFunctionType<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventPropertiesSchema extends Record<string, unknown>
> {
  (logEventProperties: LogEventPropertiesSchema, error?: unknown): LogEvent<
    LogGroupType,
    LogEventId,
    LogEventMessage,
    LogEventPropertiesSchema
  >;
}

/**
 * Log event without properties creator function type
 *
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 */
interface LogEventWithoutPropertiesCreatorFunctionType<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string
> {
  (error?: unknown): LogEvent<LogGroupType, LogEventId, LogEventMessage, undefined>;
}

/**
 * Log event creator function type
 *
 * @template LogGroupType Log group type
 * @template LogEventId Log event identifier
 * @template LogEventMessage Log event message
 * @template LogEventPropertiesSchema Log event properties schema
 */
type LogEventCreatorFunctionType<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventPropertiesSchema extends Record<string, unknown> | undefined
> = LogEventPropertiesSchema extends Record<string, unknown>
  ? LogEventWithPropertiesCreatorFunctionType<LogGroupType, LogEventId, LogEventMessage, LogEventPropertiesSchema>
  : LogEventWithoutPropertiesCreatorFunctionType<LogGroupType, LogEventId, LogEventMessage>;

/**
 * Function capable of creating a specific log
 *
 * @template LogEventType Log event type
 */
export type LogEventCreator<
  LogGroupType extends LogGroup<string>,
  LogEventId extends number,
  LogEventMessage extends string,
  LogEventPropertiesSchema extends Record<string, unknown> | undefined = undefined
> = LogEventCreatorFunctionType<LogGroupType, LogEventId, LogEventMessage, LogEventPropertiesSchema> & {
  readonly type: `${LogGroupName<LogGroupType>}.${LogEventId}`;
};

/**
 * Untyped log event creator
 */
export type UntypedLogEventCreator = LogEventCreator<
  LogGroup<string>,
  number,
  string,
  Record<string, unknown> | undefined
>;
