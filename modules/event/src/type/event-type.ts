import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Event } from '../event';
import { type EventCreator } from '../creator/event-creator';

/**
 * Event type
 *
 * @template DomainType Domain type
 * @template EventPropertiesByEventName Event properties by event name
 */
export type EventType<DomainType extends Domain, EventPropertiesByEventName extends ReadonlyRecord<string, any>> = {
  /**
   * Creates a new event
   *
   * @param properties Event properties
   * @returns Event
   */
  readonly [EventName in keyof EventPropertiesByEventName & string]: EventCreator<
    EventName,
    EventPropertiesByEventName[EventName] extends void
      ? () => Event<DomainType, EventName, EventPropertiesByEventName[EventName]>
      : (
          properties: EventPropertiesByEventName[EventName]
        ) => Event<DomainType, EventName, EventPropertiesByEventName[EventName]>
  >;
};
