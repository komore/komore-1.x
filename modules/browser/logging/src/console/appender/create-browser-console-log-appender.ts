import { type LogAppender } from '@komore/logging';

import { type BrowserConsoleLogAppenderOptions } from './browser-console-log-appender-options';
import { compatibleBrowserConsoleLogAppenderSeverityMapping } from './compatible-browser-console-log-appender-severity-mapping';
import { BrowserConsoleSeverityRange } from '../severity/browser-console-severity-range';

/**
 * Creates a browser  console log appender
 *
 * @param appenderOptions Console log appender options
 * @returns Console appender
 */
export function createBrowserConsoleLogAppender(appenderOptions: BrowserConsoleLogAppenderOptions): LogAppender {
  const { encoder, severityMapping, target = console } = appenderOptions;

  return logEventRecord => {
    const {
      context,
      event: { severity },
    } = logEventRecord;
    const message = encoder(logEventRecord);
    const compatibleSeverityMapping = compatibleBrowserConsoleLogAppenderSeverityMapping(severity);
    const mappedSeverity = severityMapping.find(compatibleSeverityMapping)?.severity ?? 'log';
    target[mappedSeverity].apply(console, [message, context]);
  };
}
