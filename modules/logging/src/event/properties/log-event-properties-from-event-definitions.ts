import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type LogEventPropertiesSchema } from './log-event-properties-schema';

/**
 * Event properties from event definitions
 *
 * @template EventDefinitions Event definitions
 */
export type LogEventPropertiesFromEventDefinitions<
  LogEventDefinitions extends ReadonlyRecord<string, LogEventPropertiesSchema<any>>,
> = {
  [LogEventName in keyof LogEventDefinitions & string]: TypeSchemaType<LogEventDefinitions[LogEventName]>;
};
