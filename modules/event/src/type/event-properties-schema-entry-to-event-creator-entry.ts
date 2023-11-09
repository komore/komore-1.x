import { type GenericDomain } from '@komore/domain';

import { type EventPropertiesSchema } from '../properties/event-properties-schema';
import { type EventCreatorEntry } from './event-creator-entry';

/**
 * Returns an event creator entry, given an entry with an event properties schema
 *
 * @param domain Domain
 * @returns Event creator entry
 * @template DomainType Domain type
 * @private
 */
export function eventPropertiesSchemaEntryToEventCreatorEntry<DomainType extends GenericDomain>(
  domain: DomainType
): (entry: readonly [name: string, schema: EventPropertiesSchema<unknown>]) => EventCreatorEntry {
  return ([name]) => {
    const creator = (parameters: unknown) => ({
      domain,
      name,
      ...(parameters !== undefined ? { parameters } : {}),
    });
    return [name, creator];
  };
}
