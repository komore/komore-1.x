import { _TypeSchema, _typeSchema } from '@komore/core';

const elementEventsSchemaType = 'element-events' as const;
type ElementEventsSchemaType = typeof elementEventsSchemaType;

/**
 * Element events schema
 * @template SchemaType Schema type
 * @private
 */
export type ElementEventsSchema<SchemaType extends Record<string, Event>> = _TypeSchema<
  ElementEventsSchemaType,
  SchemaType
>;

/**
 * Creates events schema typing information
 * @returns Events schema
 * @template SchemaType Schema type
 */
export function events<SchemaType extends Record<string, Event>>(): ElementEventsSchema<SchemaType> {
  return _typeSchema<ElementEventsSchemaType, SchemaType>(elementEventsSchemaType);
}
