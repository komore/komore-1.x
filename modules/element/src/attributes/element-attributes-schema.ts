import { _TypeSchema, _typeSchema, _TypeSchemaType } from '@komore/typescript';

const elementAttributesSchemaType = 'element-attributes' as const;

/**
 * Element attributes schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementAttributesSchema<SchemaType extends object> = _TypeSchema<
  typeof elementAttributesSchemaType,
  SchemaType
>;

/**
 * Element attributes schema type
 * @template Schema Schema
 */
export type ElementAttributesSchemaType<Schema> = _TypeSchemaType<Schema>;

/**
 * Creates attributes schema typing information
 * @returns Attributes schema
 * @template SchemaType Schema type
 */
export function attrs<SchemaType extends object>(): ElementAttributesSchema<SchemaType> {
  return _typeSchema<typeof elementAttributesSchemaType, SchemaType>(elementAttributesSchemaType);
}
