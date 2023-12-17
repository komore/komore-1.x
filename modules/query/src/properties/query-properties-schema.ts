import { type TypeSchema } from '@komore/typescript';

import { type queryPropertiesSchemaTypeName } from './query-properties-schema-type-name';

/**
 * Query properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type QueryPropertiesSchema<SchemaType extends readonly [resultType: any, parametersType: any]> = TypeSchema<
  typeof queryPropertiesSchemaTypeName,
  SchemaType
>;
