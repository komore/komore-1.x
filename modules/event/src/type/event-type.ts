import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Event } from '../event';
import { type EventCreator } from '../creator/event-creator';

/**
 * Event type
 *
 * @template DomainType Domain type
 * @template EventParametersByEventName Event parameters by event name
 */
export type EventType<
  DomainType extends GenericDomain,
  EventParametersByEventName extends ReadonlyRecord<string, any>,
> = {
  /**
   * Creates a new event
   *
   * @param parameters Event parameters
   * @returns Event
   */
  readonly [EventName in keyof EventParametersByEventName & string]: EventCreator<
    EventName,
    EventParametersByEventName[EventName] extends void
      ? () => Event<DomainType, EventName, EventParametersByEventName[EventName]>
      : (
          parameters: EventParametersByEventName[EventName]
        ) => Event<DomainType, EventName, EventParametersByEventName[EventName]>
  >;
};
