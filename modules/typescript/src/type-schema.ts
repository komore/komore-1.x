/**
 * Type schema
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 * @private
 */
export type _TypeSchema<SchemaTypeName extends string, SchemaType> = Readonly<{
  _t: SchemaTypeName;
  _s: SchemaType;
}>;

/**
 * Creates schema typing information
 * @param schemaTypeName Schema type name
 * @returns Attribute schema
 * @template SchemaTypeName Schema type name
 * @template SchemaType Schema type
 * @private
 */
export function _typeSchema<SchemaTypeName extends string, SchemaType>(
  schemaTypeName: SchemaTypeName
): _TypeSchema<SchemaTypeName, SchemaType> {
  return {
    _t: schemaTypeName,
    _s: (undefined as unknown) as SchemaType
  };
}

/**
 * Type schema type name from a type schema
 * @returns Schema type name
 * @template Schema Schema
 * @private
 */
export type _TypeSchemaTypeName<Schema> = Schema extends Readonly<{ _t: infer SchemaTypeName; _s: any }>
  ? SchemaTypeName extends string
    ? SchemaTypeName
    : never
  : never;

/**
 * Type schema type from a type schema
 * @returns Schema type
 * @template Schema Schema
 * @private
 */
export type _TypeSchemaType<Schema> = Schema extends Readonly<{ _t: any; _s: infer SchemaType }> ? SchemaType : never;
