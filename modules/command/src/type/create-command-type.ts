import { type GenericDomain } from '@komore/domain';
import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CommandCreator } from '../creator/command-creator';
import { type GenericCommand } from '../generic-command';
import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { type CommandType } from './command-type';

/**
 * Creates a command type
 *
 * @param domain Domain
 * @param definitions Command definitions
 * @returns Command type
 * @template DomainType Domain type
 * @template Definitions Command definitions
 */
export function createCommandType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<unknown>>,
>(domain: DomainType, definitions: Definitions): CommandType<DomainType, Definitions> {
  const meta = Object.defineProperties(
    {},
    {
      definitions: { enumerable: false, value: definitions, writable: false },
      domain: { enumerable: false, value: domain, writable: false },
    }
  );

  const propertyDescriptors = objectToEntries(definitions)
    .map(entryToCommandTypeCreatorEntry)
    .reduce(commandTypeCreatorEntryToPropertyDescriptors, {
      _: { enumerable: false, value: meta, writable: false },
    } as PropertyDescriptorMap);

  return Object.defineProperties({}, propertyDescriptors) as CommandType<DomainType, Definitions>;
}

function entryToCommandTypeCreatorEntry(
  entry: readonly [name: string, schema: CommandPropertiesSchema<unknown>]
): readonly [name: string, creator: CommandCreator<GenericCommand>] {
  const [name] = entry;
  const creator = (parameters: unknown) => ({
    name,
    ...(parameters !== undefined ? { parameters } : {}),
  });
  return [name, creator as CommandCreator<GenericCommand>];
}

function commandTypeCreatorEntryToPropertyDescriptors(
  propertyDescriptors: PropertyDescriptorMap,
  entry: readonly [name: string, creator: CommandCreator<GenericCommand>]
): PropertyDescriptorMap {
  const [name, value] = entry;
  propertyDescriptors[name] = { enumerable: false, value, writable: false };
  return propertyDescriptors;
}
