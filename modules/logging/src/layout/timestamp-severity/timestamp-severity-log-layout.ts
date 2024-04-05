import { createLogLayout } from '../create-log-layout';
import { type LogLayout } from '../log-layout';
import { type TimestampSeverityLogLayoutOptions } from './timestamp-severity-log-layout-options';

/**
 * Creates a timestamp severity log layout
 *
 * @param layoutOptions Timestamp severity layout options
 * @returns Timestamp severity layout
 */
export function timestampSeverityLogLayout(layoutOptions: TimestampSeverityLogLayoutOptions): LogLayout {
  const { dateTimeFormat, severityNames } = layoutOptions;
  return createLogLayout({ mediaType: 'text/plain' })(({ message, event: { severity }, timestamp }) => {
    // TODO: remove cast
    const date = dateTimeFormat?.format(timestamp as unknown as Date) ?? timestamp.toString();
    const severityName = severityNames.get(severity) ?? severity;
    return `${date} ${severityName} ${message}`;
  });
}
