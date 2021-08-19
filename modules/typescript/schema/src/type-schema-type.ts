import type { TypeSchema } from './type-schema';

/**
 * Type schema type from a type schema
 * @returns Type schema type
 * @template Schema Type schema
 * @private
 */
export type TypeSchemaType<Schema extends TypeSchema<string, unknown>> = Schema extends TypeSchema<
  string,
  infer SchemaType
>
  ? SchemaType
  : never;
