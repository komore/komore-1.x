import { objectToEntries } from '@komore/functional';

import { LogEventSeverities } from '../event/log-event-severities';
import { type LogEventSeverity } from '../event/log-event-severity';

/**
 * Gets a map of default log severity names
 *
 * @returns Map of default log severity names
 */
export function getDefaultLogSeverityNames(): ReadonlyMap<LogEventSeverity, string> {
  const severityNames = objectToEntries(LogEventSeverities).map(([name, value]) => [value, name] as const);
  return new Map(severityNames);
}
