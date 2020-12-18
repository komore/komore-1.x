import { _TypeSchema, _typeSchema } from '@komore/core';

const elementStateSchemaType = 'element-state' as const;
type ElementStateSchemaType = typeof elementStateSchemaType;

/**
 * Element state schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementStateSchema<SchemaType> = _TypeSchema<ElementStateSchemaType, SchemaType>;

/**
 * Creates state schema typing information
 * @returns State schema
 * @template SchemaType Schema type
 */
export function state<SchemaType>(): ElementStateSchema<SchemaType> {
  return _typeSchema<ElementStateSchemaType, SchemaType>(elementStateSchemaType);
}
