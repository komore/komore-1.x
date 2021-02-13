import type { _TypeSchema, _TypeSchemaType } from '@komore/typescript';
import { _typeSchema } from '@komore/typescript';
import type { LogEventPropertiesSchema } from './log-event-properties-schema';
import { logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Creates log event properties schema information
 * @returns Log event properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends Record<string, unknown>>(): LogEventPropertiesSchema<SchemaType> {
  return _typeSchema<typeof logEventPropertiesSchemaTypeName, SchemaType>(logEventPropertiesSchemaTypeName);
}
