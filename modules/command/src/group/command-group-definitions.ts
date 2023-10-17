import { type GenericDomain } from '@komore/domain';

import { type CommandGroup } from './command-group';
import { type GenericCommandGroup } from './generic-command-group';

/**
 * Command group definitions, given a command group
 *
 * @template CommandGroupType Command group type
 * @private
 */
export type CommandGroupDefinitions<CommandGroupType extends GenericCommandGroup> =
  CommandGroupType extends CommandGroup<GenericDomain, infer Definitions> ? Definitions : never;
