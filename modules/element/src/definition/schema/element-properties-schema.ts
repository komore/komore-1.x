import { _TypeSchema, _typeSchema } from '@komore/core';

const elementPropertiesSchemaType = 'element-properties' as const;
type ElementPropertiesSchemaType = typeof elementPropertiesSchemaType;

/**
 * Element properties schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementPropertiesSchema<SchemaType extends object> = _TypeSchema<ElementPropertiesSchemaType, SchemaType>;

/**
 * Creates properties schema typing information
 * @returns Properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends object>(): ElementPropertiesSchema<SchemaType> {
  return _typeSchema<ElementPropertiesSchemaType, SchemaType>(elementPropertiesSchemaType);
}
