import { _TypeSchema, _typeSchema, _TypeSchemaType } from '@komore/typescript';

const elementStateSchemaType = 'element-state' as const;

/**
 * Element state schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementStateSchema<SchemaType> = _TypeSchema<typeof elementStateSchemaType, SchemaType>;

/**
 * Element state schema type
 * @template Schema Schema
 */
export type ElementStateSchemaType<Schema> = _TypeSchemaType<Schema>;

/**
 * Creates state schema typing information
 * @returns State schema
 * @template SchemaType Schema type
 */
export function state<SchemaType>(): ElementStateSchema<SchemaType> {
  return _typeSchema<typeof elementStateSchemaType, SchemaType>(elementStateSchemaType);
}
