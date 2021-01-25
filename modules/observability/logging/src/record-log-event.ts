import { LogEvent } from './log-event';
import { LogEventCreator } from './log-event-creator';
import { LogEventPropertiesSchema, LogEventPropertiesSchemaType } from './log-event-properties-schema';
import { logEventStream } from './log-event-stream';

/**
 * Records a log event
 * @param logEvent Log event
 * @template LogEventType Log event type
 */
export function recordLogEvent<LogEventType extends LogEvent<any, any, any, any>>(
  logEvent: LogEventType
): void;

/**
 * Records a log event
 * @param logEventCreator Log event creator
 * @param properties Log event properties
 * @template LogEventCreatorType Log event creator type
 */
export function recordLogEvent<LogEventCreatorType extends LogEventCreator<, void>>(
  logEventCreator: LogEventCreatorType
): void;

/**
 * Records a log event
 * @param logEventCreator Log event creator
 * @param logEventProperties Log event properties
 */
export function recordLogEvent<LogEventPropertiesType extends object, LogEventCreatorType extends LogEventCreator<any, any, any, LogEventPropertiesType>>(
  logEventCreator: LogEventCreatorType,
  logEventProperties: LogEventPropertiesType
): void;

/**
 * Records a log event
 * @param logEvent Log event
 * @param logProperties Log event properties
 */
export function recordLogEvent<LogEventType extends LogEvent<any, any, any, any>>(
  logEventOrLogEventCreator: LogEventType,
  logEventProperties?: LogEventPropertiesSchemaType<LogEventPropertiesSchema<LogEventType>>
): void {
  const logEvent = isLogEventCreator(logEventOrLogEventCreator)
    ? logEventOrLogEventCreator(logEventProperties)
    : logEventOrLogEventCreator
  ;

  logEventStream.next(logEvent);
  console.log('log event', logEvent);
}

function isLogEventCreator(logEventOrLogEventCreator): logEventOrLogEventCreator is LogEventCreator<any> {
  return true;
}
