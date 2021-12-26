import { type TypeSchema } from './type-schema';

/**
 * Type schema type name from a type schema
 * @returns Schema type name
 * @template Schema Type schema
 */
export type TypeSchemaTypeName<Schema extends TypeSchema<string, unknown>> = Schema extends TypeSchema<
  infer SchemaTypeSymbol,
  unknown
>
  ? SchemaTypeSymbol
  : never;
