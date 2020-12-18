import { _TypeSchema, _typeSchema, _TypeSchemaType } from '@komore/core';

const logEventPropertiesSchemaTypeName = 'log-event-properties' as const;
type LogEventPropertiesSchemaTypeName = typeof logEventPropertiesSchemaTypeName;

/**
 * Log event properties schema
 * @template SchemaType Schema type
 * @private
 */
export type LogEventPropertiesSchema<SchemaType extends object> = _TypeSchema<
  LogEventPropertiesSchemaTypeName,
  SchemaType
>;

/**
 * Creates log event properties schema typing information
 * @returns Log event properties schema
 * @template SchemaType Schema type
 */
export function props<SchemaType extends object>(): LogEventPropertiesSchema<SchemaType> {
  return _typeSchema<LogEventPropertiesSchemaTypeName, SchemaType>(logEventPropertiesSchemaTypeName);
}

export type LogEventPropertiesSchemaType<LogEventPropertiesType> = _TypeSchemaType<LogEventPropertiesType>;
