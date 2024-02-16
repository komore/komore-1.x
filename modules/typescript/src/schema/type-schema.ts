import { typeSchemaType, typeSchemaTypeName } from './type-schema-symbol';

/**
 * Type schema
 *
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 */
export interface TypeSchema<SchemaTypeName extends string, SchemaType> {
  readonly [typeSchemaTypeName]: SchemaTypeName;
  readonly [typeSchemaType]: SchemaType;
}

/**
 * Creates schema typing information
 *
 * @param schemaTypeName Schema type name
 * @returns Type schema
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 */
export function typeSchema<SchemaTypeName extends string, SchemaType>(
  schemaTypeName: SchemaTypeName
): TypeSchema<SchemaTypeName, SchemaType> {
  return {
    [typeSchemaTypeName]: schemaTypeName,
    [typeSchemaType]: void 0 as unknown as SchemaType,
  };
}
