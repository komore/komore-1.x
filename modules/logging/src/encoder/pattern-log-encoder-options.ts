import { type LogEventSeverity } from '../definition/log-event-severity';

/**
 * Pattern log encoder options
 */
export interface PatternLogEncoderOptions {
  readonly date?: {
    readonly locales?: ConstructorParameters<typeof Intl.DateTimeFormat>[0];
    readonly options?: ConstructorParameters<typeof Intl.DateTimeFormat>[1];
  };
  readonly severityNames?: ReadonlyMap<LogEventSeverity, string>;
}
