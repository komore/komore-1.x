import { _TypeSchema, _typeSchema } from '@komore/core';

const elementAttributesSchemaType = 'element-attributes' as const;
type ElementAttributesSchemaType = typeof elementAttributesSchemaType;

/**
 * Element attributes schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementAttributesSchema<SchemaType extends object> = _TypeSchema<ElementAttributesSchemaType, SchemaType>;

/**
 * Creates attributes schema typing information
 * @returns Attributes schema
 * @template SchemaType Schema type
 */
export function attrs<SchemaType extends object>(): ElementAttributesSchema<SchemaType> {
  return _typeSchema<ElementAttributesSchemaType, SchemaType>(elementAttributesSchemaType);
}
