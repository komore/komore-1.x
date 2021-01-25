import { typeSchemaType, typeSchemaTypeName } from './type-schema-symbol';

/**
 * Type schema
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 * @private
 */
export interface _TypeSchema<SchemaTypeName extends string, SchemaType> {
  [typeSchemaTypeName]: SchemaTypeName;
  [typeSchemaType]: SchemaType;
}

/**
 * Creates schema typing information
 * @param schemaTypeName Schema type name
 * @returns Type schema
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 * @private
 */
export function _typeSchema<SchemaTypeName extends string, SchemaType>(
  schemaTypeName: SchemaTypeName
): _TypeSchema<SchemaTypeName, SchemaType> {
  return {
    [typeSchemaTypeName]: schemaTypeName,
    [typeSchemaType]: (undefined as unknown) as SchemaType
  };
}
