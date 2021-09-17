import { typeSchema } from '@komore/typescript/schema';
import type { LogEventPropertiesSchema } from './log-event-properties-schema';
import { logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Creates log event properties schema information
 * @returns Log event properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends Record<string, unknown>>(): LogEventPropertiesSchema<SchemaType> {
  return typeSchema<typeof logEventPropertiesSchemaTypeName, SchemaType>(logEventPropertiesSchemaTypeName);
}
