import { objectToEntries } from '@komore/functional';

import { logEventSeverities } from './log-event-severities';
import { type LogEventSeverity } from './log-event-severity';

/**
 * Returns a map of default log severity names
 *
 * @returns Map of default log severity names
 */
export function defaultLogSeverityNames(): ReadonlyMap<LogEventSeverity, string> {
  const severityNames = objectToEntries(logEventSeverities).map(([name, value]) => [value, name] as const);
  return new Map(severityNames);
}
