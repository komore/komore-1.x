import { type LogEventSeverity } from '../event/log-event-severity';
import { type LogEventMapping } from './log-event-mapping';

export function createLogEventMapping(appenderName: string, severity: LogEventSeverity = 0): LogEventMapping {
  return {
    appenderName,
    severity,
  };
}
