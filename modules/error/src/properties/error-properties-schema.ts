import { type ReadonlyRecord } from '@komore/typescript';
import { type TypeSchema } from '@komore/typescript/schema';

import { type errorPropertiesSchemaTypeName } from './error-properties-schema-type-name';

/**
 * Error properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type ErrorPropertiesSchema<SchemaType extends ReadonlyRecord<string, unknown>> = TypeSchema<
  typeof errorPropertiesSchemaTypeName,
  SchemaType
>;
