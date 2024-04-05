import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEvent } from '../event/log-event';
import { type LogEventRecord } from './log-event-record';

export function logEventToLogEventRecord(): (logEvent: LogEvent) => LogEventRecord {
  return event => {
    const { parameters } = event;
    // TODO: translation
    const message = formatMessage(`log event ${event.domain.name}.${event.name}`, parameters);
    const timestamp = Temporal.Now.instant();
    const context = {
      ...parameters,
      // TODO: additional contextual information
    };
    return {
      context,
      event,
      message,
      timestamp,
    };
  };
}

function formatMessage(message: string, properties: ReadonlyRecord<string, unknown>): string {
  return message.replace(/\${([^}]+)}/g, (match, token) =>
    token in properties ? (properties[token] as string) : match
  );
}
