import { type TypeSchema } from '@komore/typescript/schema';
import { type eventPropertiesSchemaTypeName } from './event-properties-schema-type-name';

/**
 * Event properties schema
 * @template SchemaType Schema type
 * @private
 */
export type EventPropertiesSchema<SchemaType extends Record<string, unknown>> = TypeSchema<
  typeof eventPropertiesSchemaTypeName,
  SchemaType
>;
