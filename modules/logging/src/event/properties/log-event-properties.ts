import { typeSchema, type ReadonlyRecord } from '@komore/typescript';

import { type LogEventSeverity } from '../../severity/log-event-severity';
import { type LogEventPropertiesSchema } from './log-event-properties-schema';
import { logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Creates a log event properties schema
 *
 * @param severity Log event severity
 * @returns Log event properties schema
 * @template SchemaType Schema type
 */
export function logEventProperties(severity: LogEventSeverity): LogEventPropertiesSchema<void>;
export function logEventProperties<SchemaType extends ReadonlyRecord<string, any>>(
  severity: LogEventSeverity
): LogEventPropertiesSchema<SchemaType>;

export function logEventProperties<SchemaType>(severity: LogEventSeverity): LogEventPropertiesSchema<SchemaType> {
  return {
    ...typeSchema<typeof logEventPropertiesSchemaTypeName, SchemaType>(logEventPropertiesSchemaTypeName),
    severity,
  };
}
