import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Command } from '../command';
import { type CommandCreator } from '../creator/command-creator';
import { type CommandPropertiesSchema } from '../properties/command-properties-schema';

/**
 * Command type
 *
 * @template DomainType Domain type
 * @template Definitions Command definitions
 */
export type CommandType<
  DomainType extends GenericDomain,
  Definitions extends ReadonlyRecord<string, CommandPropertiesSchema<unknown>>,
> = {
  /**
   * Creates a new command
   *
   * @param parameters Command parameters
   * @returns Command
   */
  readonly [CommandName in keyof Definitions & string]: CommandCreator<
    Command<DomainType, CommandType<DomainType, Definitions>, CommandName, Definitions[CommandName]>
  >;
};
