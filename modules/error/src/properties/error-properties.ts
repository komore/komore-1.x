import { type ReadonlyRecord } from '@komore/typescript';
import { typeSchema } from '@komore/typescript/schema';

import { type ErrorPropertiesSchema } from './error-properties-schema';
import { errorPropertiesSchemaTypeName } from './error-properties-schema-type-name';

export function errorProperties<
  SchemaType extends ReadonlyRecord<string, unknown>
>(): ErrorPropertiesSchema<SchemaType> {
  return typeSchema<typeof errorPropertiesSchemaTypeName, SchemaType>(errorPropertiesSchemaTypeName);
}
