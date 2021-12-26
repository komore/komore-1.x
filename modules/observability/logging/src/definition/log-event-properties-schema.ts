import { type TypeSchema } from '@komore/typescript/schema';
import { type logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Log event properties schema
 * @template SchemaType Schema type
 * @private
 */
export type LogEventPropertiesSchema<SchemaType extends Record<string, unknown>> = TypeSchema<
  typeof logEventPropertiesSchemaTypeName,
  SchemaType
>;
