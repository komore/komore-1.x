import { LogEvent } from './log-event';
import { LogEventPropertiesSchemaType } from './log-event-properties-schema';

/**
 * Log event creator function type
 * @template LogEventType Log event type
 */
export type LogEventCreatorFunctionType<
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined,
  LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>
> = LogEventPropertiesSchemaType<LogEventPropertiesSchema> extends object
  ? (logProperties: LogEventPropertiesSchemaType<LogEventType>) => LogEventType
  : () => LogEventType;

/**
 * Function capable of creating a specific log
 * @template LogEventType Log event type
 */
export type LogEventCreator<
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined,
  LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>
> = LogEventCreatorFunctionType<
  LogGroupName,
  LogEventId,
  LogEventPropertiesSchema,
  LogEventType
> &
  Readonly<{ type: `${LogGroupName}.${LogEventId}` }>;

/**
 * Log creator log type
 * @template LogCreatorType Log creator type
 */
export type LogCreatorLogType<LogCreatorType> = LogCreatorType extends LogEventCreator<any, any, any, infer LogType>
  ? LogType
  : never;
