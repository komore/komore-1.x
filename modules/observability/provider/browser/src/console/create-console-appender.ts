import { type Appender } from '@komore/observability/logging';
import { type LogEventSeverity } from '@komore/observability/logging';
import { type ConsoleAppenderOptions } from './console-appender-options';
import { type ConsoleSeverityRange } from './console-severity-range';

/**
 * Creates a console appender
 * @param options Console appender options
 * @returns Console appender
 */
export function createConsoleAppender(options: ConsoleAppenderOptions): Appender {
  return {
    next({ logContext, logEvent, message }) {
      const eventSeverity = logEvent.severity;
      const mappedSeverity = options.severityMapping.find(compatibleSeverityMapping(eventSeverity))?.severity ?? 'log';
      console[mappedSeverity].apply(console, [message, logContext]);
    }
  };
}

/**
 * Creates a compatible severity mapping find predicate
 * @param severity Log event severity
 * @returns Predicate that finds a compatible severity mapping
 */
function compatibleSeverityMapping(severity: LogEventSeverity) {
  return ({ min, max }: ConsoleSeverityRange) =>
    (min === undefined || min <= severity) && (max === undefined || severity <= max);
}
