import { typeSchema } from '@komore/typescript';

import { type QueryPropertiesSchema } from './query-properties-schema';
import { queryPropertiesSchemaTypeName } from './query-properties-schema-type-name';

/**
 * Creates a query properties schema
 *
 * @returns Query properties schema
 * @template ResultSchemaType Query result schema type
 * @template PropertiesSchemaType Query properties schema type
 */
export function queryProperties<ResultSchemaType, PropertiesSchemaType = void>(): QueryPropertiesSchema<
  readonly [result: ResultSchemaType, properties: PropertiesSchemaType]
> {
  return typeSchema<typeof queryPropertiesSchemaTypeName, [ResultSchemaType, PropertiesSchemaType]>(
    queryPropertiesSchemaTypeName
  );
}
