import { Temporal } from '@js-temporal/polyfill';
import { type ReadonlyRecord } from '@komore/typescript';
import { type LogEvent } from '../event/log-event';
import { type LogGroup } from '../group/log-group';
import { type LogEventRecord } from './log-event-record';

export function buildLogEventRecord<
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(logEvent: LogEventType): LogEventRecord<LogEventType> {
  const { message } = logEvent;
  const timestamp = Temporal.Now.plainDateTimeISO();
  const logEventRecord: LogEventRecord<LogEventType> = {
    logContext: {},
    logEvent,
    message: formatMessage(message, logEvent.properties),
    timestamp,
  };

  return logEventRecord;
}

function formatMessage(message: string, properties: ReadonlyRecord<string, unknown>): string {
  return message.replace(/\${([^}]+)}/g, (match, token) =>
    token in properties ? (properties[token] as string) : match
  );
}
