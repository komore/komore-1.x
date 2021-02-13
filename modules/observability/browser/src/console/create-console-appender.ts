import type { Appender } from '@komore/observability/logging';
import { LogEventSeverity } from '@komore/observability/logging';
import type { ConsoleAppenderOptions } from './console-appender-options';
import type { ConsoleSeverityRange } from './console-severity-range';

/**
 * Creates a console appender
 * @param options Console appender options
 * @returns Console appender
 */
export function createConsoleAppender(options?: ConsoleAppenderOptions): Appender {
  const severityMapping = options?.severityMapping ?? getDefaultSeverityMapping();

  return {
    next({ logContext, logEvent, processedMessage }) {
      const eventSeverity = logEvent.severity;
      const mappedSeverity = severityMapping.find(compatibleSeverityMapping(eventSeverity))?.severity ?? 'log';
      console[mappedSeverity].apply(console, [processedMessage, logContext]);
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

/**
 * Gets the default severity mapping
 */
function getDefaultSeverityMapping(): ReadonlyArray<ConsoleSeverityRange> {
  return [
    {
      max: LogEventSeverity.INFO - 1,
      severity: 'debug'
    },
    {
      min: LogEventSeverity.INFO,
      max: LogEventSeverity.WARNING - 1,
      severity: 'info'
    },
    {
      min: LogEventSeverity.WARNING,
      max: LogEventSeverity.ERROR - 1,
      severity: 'warn'
    },
    {
      min: LogEventSeverity.ERROR,
      severity: 'error'
    }
  ];
}
