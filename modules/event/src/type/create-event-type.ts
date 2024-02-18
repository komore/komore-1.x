import { type Domain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type EventPropertiesFromEventDefinitions } from '../properties/event-properties-from-event-definitions';
import { type EventPropertiesSchema } from '../properties/event-properties-schema';
import { type EventType } from './event-type';
import { eventPropertiesSchemaEntryToEventCreatorEntry } from './event-properties-schema-entry-to-event-creator-entry';
import { eventCreatorEntryToPropertyDescriptorMap } from './event-creator-entry-to-property-descriptor-map';

/**
 * Creates a event type
 *
 * @param domain Domain
 * @param definitions Event definitions
 * @returns Event group
 * @template DomainType Domain type
 * @template EventDefinitions Event definitions
 */
export function createEventType<
  DomainType extends Domain,
  EventDefinitions extends ReadonlyRecord<string, EventPropertiesSchema<any>>,
>(
  domain: DomainType,
  definitions: EventDefinitions
): EventType<DomainType, EventPropertiesFromEventDefinitions<EventDefinitions>> {
  const propertyDescriptors = objectToEntries(definitions)
    .map(eventPropertiesSchemaEntryToEventCreatorEntry(domain))
    .reduce(eventCreatorEntryToPropertyDescriptorMap, {} as PropertyDescriptorMap);
  return Object.defineProperties({}, propertyDescriptors) as EventType<
    DomainType,
    EventPropertiesFromEventDefinitions<EventDefinitions>
  >;
}
