import { type LogEventMapping } from './log-event-mapping';
import { type LogEventMappingOptions } from './log-event-mapping-options';

/**
 * Creates a log event mapping
 *
 * @param appenderName Appender name
 * @param mappingOptions Log event mapping options
 * @returns Log event mapping
 */
export function createLogEventMapping(appenderName: string, mappingOptions?: LogEventMappingOptions): LogEventMapping {
  const severity = mappingOptions?.severity ?? 0;
  return {
    appenderName,
    severity,
  };
}
