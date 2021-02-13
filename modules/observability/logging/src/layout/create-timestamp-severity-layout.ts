import { enumEntries } from '@komore/typescript';
import { LogEventSeverities } from '../log-event-severities';
import type { LogEventSeverity } from '../log-event-severity';
import type { Layout } from './layout';
import type { TimestampSeverityLayoutOptions } from './timestamp-severity-layout-options';

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

/**
 * Gets a map of default severity names
 * @returns Map of default severity names
 */
function getDefaultSeverityNames(): ReadonlyMap<LogEventSeverity | number, string> {
  const severityNames = enumEntries(LogEventSeverities).map(
    ([name, value]) => ([value, name] as unknown) as [LogEventSeverity, string]
  );
  return new Map(severityNames);
}
