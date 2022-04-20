import { type LogEvent } from '../event/log-event';

/**
 * Log event group type
 * @template LogEventType Log event type
 */
export type LogEventGroupType<LogEventType extends LogEvent<any, any, any, any>> = LogEventType extends LogEvent<
  infer LogGroupType,
  any,
  any,
  any
>
  ? LogGroupType
  : never;
