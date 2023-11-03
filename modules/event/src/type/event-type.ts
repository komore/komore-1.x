import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type EventCreator } from '../creator/event-creator';
import { type Event } from '../event';
import { type EventPropertiesSchema } from '../properties/event-properties-schema';

/**
 * Event type
 *
 * @template DomainType Domain type
 * @template Definitions Event definitions
 */
export type EventType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, EventPropertiesSchema<unknown>>,
> = {
  /**
   * Creates a new event
   *
   * @param parameters Event parameters
   * @returns Event
   */
  readonly [EventName in keyof Definitions & string]: EventCreator<
    Event<DomainType, EventName, Definitions[EventName]>
  >;
};
