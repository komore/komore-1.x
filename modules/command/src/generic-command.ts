import { type GenericDomain } from '@komore/domain';

import { type Command } from './command';

/**
 * Generic command
 */
export type GenericCommand = Command<GenericDomain, string, any>;
