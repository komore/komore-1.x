import type { _TypeSchema } from '@komore/typescript';
import type { logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Log event properties schema
 * @template SchemaType Schema type
 * @private
 */
export type LogEventPropertiesSchema<SchemaType extends Record<string, unknown>> = _TypeSchema<
  typeof logEventPropertiesSchemaTypeName,
  SchemaType
>;
