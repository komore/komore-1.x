import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type EventPropertiesSchema } from './event-properties-schema';

/**
 * Event properties from event definitions
 *
 * @template EventDefinitions Event definitions
 */
export type EventPropertiesFromEventDefinitions<
  EventDefinitions extends ReadonlyRecord<string, EventPropertiesSchema<any>>,
> = {
  [EventName in keyof EventDefinitions & string]: TypeSchemaType<EventDefinitions[EventName]>;
};
