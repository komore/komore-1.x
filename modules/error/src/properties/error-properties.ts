import { type ReadonlyRecord } from '@komore/typescript';
import { typeSchema } from '@komore/typescript';

import { type ErrorPropertiesSchema } from './error-properties-schema';
import { errorPropertiesSchemaTypeName } from './error-properties-schema-type-name';

/**
 * Creates an error properties schema
 *
 * @returns Error properties schema
 */
export function errorProperties<
  SchemaType extends ReadonlyRecord<string, unknown>
>(): ErrorPropertiesSchema<SchemaType> {
  return typeSchema<typeof errorPropertiesSchemaTypeName, SchemaType>(errorPropertiesSchemaTypeName);
}
