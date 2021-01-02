import { _TypeSchema, _typeSchema, _TypeSchemaType } from '@komore/typescript';

const elementPropertiesSchemaType = 'element-properties' as const;

/**
 * Element properties schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementPropertiesSchema<SchemaType extends object> = _TypeSchema<
  typeof elementPropertiesSchemaType,
  SchemaType
>;

/**
 * Element properties schema type
 * @template Schema Schema
 */
export type ElementPropertiesSchemaType<Schema> = _TypeSchemaType<Schema>;

/**
 * Creates properties schema typing information
 * @returns Properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends object>(): ElementPropertiesSchema<SchemaType> {
  return _typeSchema<typeof elementPropertiesSchemaType, SchemaType>(elementPropertiesSchemaType);
}
