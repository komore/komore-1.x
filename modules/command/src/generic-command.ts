import { type Domain } from '@komore/domain';

import { type Command } from './command';

/**
 * Generic command
 */
export type GenericCommand = Command<Domain<string>, string, object | void>;
