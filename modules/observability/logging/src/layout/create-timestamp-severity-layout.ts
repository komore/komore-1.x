import { getDefaultSeverityNames } from './get-default-severity-names';
import { type Layout } from './layout';
import { type TimestampSeverityLayoutOptions } from './timestamp-severity-layout-options';

/**
 * Creates a timestamp severity layout
 * @returns Timestamp severity layout
 */
export function createTimestampSeverityLayout(options?: TimestampSeverityLayoutOptions): Layout {
  const severityNames = options?.severityNames ?? getDefaultSeverityNames();
  return ({ message, logEvent: { severity, timestamp } }) => {
    const date = timestamp.toISOString();
    const severityName = severityNames.get(severity) ?? severity;
    return `${date} ${severityName} ${message}`;
  };
}
