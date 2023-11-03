import { type GenericDomain } from '@komore/domain';

import { type Command } from './command';
import { type CommandPropertiesSchema } from './properties/command-properties-schema';

/**
 * Generic command
 */
export type GenericCommand = Command<GenericDomain, string, CommandPropertiesSchema<unknown>>;
