import { type ReadonlyRecord, type TypeSchema } from '@komore/typescript';

import { type logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Log event properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type LogEventPropertiesSchema<SchemaType extends ReadonlyRecord<string, unknown>> = TypeSchema<
  typeof logEventPropertiesSchemaTypeName,
  SchemaType
>;
