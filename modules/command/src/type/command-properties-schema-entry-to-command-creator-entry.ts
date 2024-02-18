import { type Domain } from '@komore/domain';

import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { type CommandCreatorEntry } from './command-creator-entry';

/**
 * Returns a command creator entry, given an entry with a command properties schema
 *
 * @param domain Domain
 * @returns Command creator entry
 * @template DomainType Domain type
 * @private
 */
export function commandPropertiesSchemaEntryToCommandCreatorEntry<DomainType extends Domain>(
  domain: DomainType
): (entry: readonly [name: string, schema: CommandPropertiesSchema<unknown>]) => CommandCreatorEntry {
  return ([name]) => {
    const creatorWrapper = {
      [name]: (parameters: unknown) => ({
        domain,
        name,
        ...(parameters !== undefined ? { parameters } : {}),
      }),
    } as const;
    const creator = creatorWrapper[name];
    return [name, creator as NonNullable<typeof creator>];
  };
}
