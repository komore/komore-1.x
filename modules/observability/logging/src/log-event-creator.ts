import { LogEvent } from './log-event';

/**
 * Log event with properties creator function type
 */
interface LogEventWithPropertiesCreatorFunctionType<LogGroupName extends string, LogEventId extends number, LogEventPropertiesSchema extends object,
LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>> {
  (logProperties: LogEventPropertiesSchema): LogEventType;
}

/**
 * Log event without properties creator function type
 */
interface LogEventWithoutPropertiesCreatorFunctionType<LogGroupName extends string, LogEventId extends number, LogEventType extends LogEvent<LogGroupName, LogEventId>> {
  (): LogEventType;
}

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
export interface LogEventCreator<
  LogGroupName extends string,
  LogEventId extends number,
  LogEventPropertiesSchema extends object | undefined,
  LogEventType extends LogEvent<LogGroupName, LogEventId, LogEventPropertiesSchema>
> extends LogEventCreatorFunctionType<LogGroupName, LogEventId, LogEventPropertiesSchema, LogEventType> {

}

= LogEventCreatorFunctionType<
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
