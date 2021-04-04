import type { _TypeSchema } from './type-schema';

/**
 * Type schema type from a type schema
 * @returns Type schema type
 * @template TypeSchema Type schema
 * @private
 */
export type _TypeSchemaType<TypeSchema extends _TypeSchema<string, unknown>> = TypeSchema extends _TypeSchema<
  string,
  infer SchemaType
>
  ? SchemaType
  : never;
