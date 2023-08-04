import { type BrowserConsoleAppenderOptions } from '../appender/browser-console-appender-options';
import { getDefaultBrowserConsoleLogEventSeverityMapping } from './get-default-browser-console-log-event-severity-mapping';

export function withDefaultBrowserConsoleLogEventSeverityMapping(
  options: Omit<BrowserConsoleAppenderOptions, 'severityMapping'>
): BrowserConsoleAppenderOptions {
  return {
    ...options,
    severityMapping: getDefaultBrowserConsoleLogEventSeverityMapping(),
  };
}
