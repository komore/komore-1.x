import { type TypeSchema } from '@komore/typescript';

import { type errorPropertiesSchemaTypeName } from './error-properties-schema-type-name';

/**
 * Error properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type ErrorPropertiesSchema<SchemaType> = TypeSchema<typeof errorPropertiesSchemaTypeName, SchemaType>;
