import { typeSchema } from '@komore/typescript/schema';
import { type EventPropertiesSchema } from './event-properties-schema';
import { eventPropertiesSchemaTypeName } from './event-properties-schema-type-name';

/**
 * Creates event properties schema information
 *
 * @returns Event properties schema
 * @template SchemaType Schema type
 */
export function eventProperties<SchemaType extends Record<string, unknown>>(): EventPropertiesSchema<SchemaType> {
  return typeSchema<typeof eventPropertiesSchemaTypeName, SchemaType>(eventPropertiesSchemaTypeName);
}
