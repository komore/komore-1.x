import { enumEntries } from '@komore/functional';
import { LogEventSeverities } from '../definition/log-event-severities';
import { type LogEventSeverity } from '../definition/log-event-severity';

/**
 * Gets a map of default severity names
 * @returns Map of default severity names
 */
export function getDefaultSeverityNames(): ReadonlyMap<LogEventSeverity | number, string> {
  const severityNames = enumEntries(LogEventSeverities).map(
    ([name, value]) => ([value, name] as unknown) as [LogEventSeverity, string]
  );
  return new Map(severityNames);
}
