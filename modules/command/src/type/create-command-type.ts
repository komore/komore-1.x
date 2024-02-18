import { type Domain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CommandPropertiesFromCommandDefinitions } from '../properties/command-properties-from-command-definitions';
import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { commandPropertiesSchemaEntryToCommandCreatorEntry } from './command-properties-schema-entry-to-command-creator-entry';
import { type CommandType } from './command-type';
import { commandCreatorEntryToPropertyDescriptorMap } from './command-creator-entry-to-property-descriptor-map';

/**
 * Creates a command type
 *
 * @param domain Domain
 * @param definitions Command definitions
 * @returns Command type
 * @template DomainType Domain type
 * @template CommandDefinitions Command definitions
 */
export function createCommandType<
  DomainType extends Domain,
  CommandDefinitions extends ReadonlyRecord<string, CommandPropertiesSchema<any>>,
>(
  domain: DomainType,
  definitions: CommandDefinitions
): CommandType<DomainType, CommandPropertiesFromCommandDefinitions<CommandDefinitions>> {
  const propertyDescriptors = objectToEntries(definitions)
    .map(commandPropertiesSchemaEntryToCommandCreatorEntry(domain))
    .reduce(commandCreatorEntryToPropertyDescriptorMap, {} as PropertyDescriptorMap);
  return Object.defineProperties({}, propertyDescriptors) as CommandType<
    DomainType,
    CommandPropertiesFromCommandDefinitions<CommandDefinitions>
  >;
}
