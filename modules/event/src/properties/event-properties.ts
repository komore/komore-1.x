import { typeSchema } from '@komore/typescript';

import { type EventPropertiesSchema } from './event-properties-schema';
import { eventPropertiesSchemaTypeName } from './event-properties-schema-type-name';

/**
 * Creates a event properties schema
 *
 * @returns Event properties schema
 * @template SchemaType Schema type
 */
export function eventProperties(): EventPropertiesSchema<void>;
export function eventProperties<SchemaType>(): EventPropertiesSchema<SchemaType>;

export function eventProperties<SchemaType>(): EventPropertiesSchema<SchemaType> {
  return typeSchema<typeof eventPropertiesSchemaTypeName, SchemaType>(eventPropertiesSchemaTypeName);
}
