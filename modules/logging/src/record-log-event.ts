import { type GenericLogEvent } from './event/generic-log-event';

/**
 * Records a log event
 *
 * @param logEvent Log event
 */
export function recordLogEvent(logEvent: GenericLogEvent): void {
  const { domain, name, parameters, severity } = logEvent;
  console.log(`[${domain.name}] ${severity} ${name}`, parameters);
}
