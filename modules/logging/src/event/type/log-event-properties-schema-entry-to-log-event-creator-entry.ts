import { type GenericDomain } from '@komore/domain';

import { type LogEventPropertiesSchema } from '../properties/log-event-properties-schema';
import { type LogEventCreatorEntry } from './log-event-creator-entry';

/**
 * Returns an event creator entry, given an entry with an event properties schema
 *
 * @param domain Domain
 * @returns Event creator entry
 * @template DomainType Domain type
 * @private
 */
export function logEventPropertiesSchemaEntryToLogEventCreatorEntry<DomainType extends GenericDomain>(
  domain: DomainType
): (entry: readonly [name: string, schema: LogEventPropertiesSchema<unknown>]) => LogEventCreatorEntry {
  return ([name, { severity }]) => {
    const creator = (parameters: unknown) => ({
      domain,
      name,
      severity,
      ...(parameters !== undefined ? { parameters } : {}),
    });
    return [name, creator];
  };
}
