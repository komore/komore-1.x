import type { _TypeSchema } from './type-schema';

/**
 * Type schema type name from a type schema
 * @returns Schema type name
 * @template TypeSchema Type schema
 * @private
 */
export type _TypeSchemaTypeName<TypeSchema extends _TypeSchema<any, any>> = TypeSchema extends _TypeSchema<
  infer SchemaTypeSymbol,
  any
>
  ? SchemaTypeSymbol
  : never;
