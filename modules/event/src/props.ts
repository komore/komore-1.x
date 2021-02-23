import type { _TypeSchema, _TypeSchemaType } from '@komore/typescript';
import { _typeSchema } from '@komore/typescript';
import type { EventPropertiesSchema } from './event-properties-schema';
import { eventPropertiesSchemaTypeName } from './event-properties-schema-type-name';

/**
 * Creates event properties schema information
 * @returns Event properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends Record<string, unknown>>(): EventPropertiesSchema<SchemaType> {
  return _typeSchema<typeof eventPropertiesSchemaTypeName, SchemaType>(eventPropertiesSchemaTypeName);
}
