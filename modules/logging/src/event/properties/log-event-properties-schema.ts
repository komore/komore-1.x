import { type TypeSchema } from '@komore/typescript';

import { type LogEventSeverity } from '../log-event-severity';
import { type logEventPropertiesSchemaTypeName } from './log-event-properties-schema-type-name';

/**
 * Log event properties schema
 *
 * @template SchemaType Schema type
 * @private
 */
export type LogEventPropertiesSchema<SchemaType> = TypeSchema<typeof logEventPropertiesSchemaTypeName, SchemaType> & {
  /**
   * Severity
   */
  readonly severity: LogEventSeverity;
};
