import { getDefaultLogSeverityNames } from './get-default-log-severity-names';
import { type LogEncoder } from './log-encoder';
import { type TimestampSeverityLogEncoderOptions } from './timestamp-severity-log-encoder-options';

/**
 * Creates a timestamp severity log encoder
 *
 * @param options Timestamp severity encoder options
 * @returns Timestamp severity encoder
 */
export function createTimestampSeverityEncoder(options?: TimestampSeverityLogEncoderOptions): LogEncoder {
  const severityNames = options?.severityNames ?? getDefaultLogSeverityNames();
  return ({ message, event: { severity }, timestamp }) => {
    const date = timestamp.toString();
    const severityName = severityNames.get(severity) ?? severity;
    return `${date} ${severityName} ${message}`;
  };
}
