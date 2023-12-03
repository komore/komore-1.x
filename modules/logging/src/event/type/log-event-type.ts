import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventCreator } from '../creator/log-event-creator';
import { type LogEvent } from '../log-event';

/**
 * Log event type
 *
 * @template DomainType Domain type
 * @template LogEventParametersByEventName Log event parameters by event name
 */
export type LogEventType<
  DomainType extends GenericDomain,
  LogEventParametersByEventName extends ReadonlyRecord<string, any>,
> = {
  /**
   * Creates a new event
   *
   * @param parameters Event parameters
   * @returns Event
   */
  readonly [LogEventName in keyof LogEventParametersByEventName & string]: LogEventCreator<
    LogEventName,
    LogEventParametersByEventName[LogEventName] extends void
      ? () => LogEvent<DomainType, LogEventName, LogEventParametersByEventName[LogEventName]>
      : (
          parameters: LogEventParametersByEventName[LogEventName]
        ) => LogEvent<DomainType, LogEventName, LogEventParametersByEventName[LogEventName]>
  >;
};
