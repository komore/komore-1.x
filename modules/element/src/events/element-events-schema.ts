import { _TypeSchema, _typeSchema, _TypeSchemaType } from '@komore/typescript';

const elementEventsSchemaType = 'element-events' as const;

/**
 * Element events schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementEventsSchema<SchemaType extends Record<string, unknown>> = _TypeSchema<
  typeof elementEventsSchemaType,
  SchemaType
>;

/**
 * Element events schema type
 * @template Schema Schema
 */
export type ElementEventsSchemaType<Schema> = _TypeSchemaType<Schema>;

/**
 * Creates events schema typing information
 * @returns Events schema
 * @template SchemaType Schema type
 */
export function events<SchemaType extends Record<string, unknown>>(): ElementEventsSchema<SchemaType> {
  return _typeSchema<typeof elementEventsSchemaType, SchemaType>(elementEventsSchemaType);
}
