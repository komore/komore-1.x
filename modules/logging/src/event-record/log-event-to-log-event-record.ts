import { Temporal } from '@komore/temporal';
import { type ReadonlyRecord } from '@komore/typescript';

import { type GenericLogEvent } from '../event/generic-log-event';
import { type LogEventRecord } from './log-event-record';

export function logEventToLogEventRecord(): (logEvent: GenericLogEvent) => LogEventRecord {
  return event => {
    const { parameters } = event;
    const message = formatMessage(`log event ${event.domain.name}.${event.name}`, parameters);
    const timestamp = Temporal.Now.plainDateTimeISO();
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
