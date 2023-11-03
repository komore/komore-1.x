import { type GenericDomain } from '@komore/domain';

import { type CommandType } from './command-type';
import { type GenericCommandType } from './generic-command-type';

/**
 * Command type definitions, given a command type
 *
 * @template T Command type
 * @private
 */
export type CommandTypeDefinitions<T extends GenericCommandType> = T extends CommandType<
  GenericDomain,
  infer Definitions
>
  ? Definitions
  : never;
