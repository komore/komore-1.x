import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CommandType } from './command-type';

/**
 * Generic command type
 */
export type GenericCommandType = CommandType<Domain, ReadonlyRecord<string, any>>;
