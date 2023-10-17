import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { type CommandGroup } from './command-group';

/**
 * Generic command group
 */
export type GenericCommandGroup = CommandGroup<
  GenericDomain,
  ReadonlyRecord<string, CommandPropertiesSchema<ReadonlyRecord<string, unknown>>>
>;
