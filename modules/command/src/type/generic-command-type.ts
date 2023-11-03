import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CommandPropertiesSchema } from '../properties/command-properties-schema';
import { type CommandType } from './command-type';

/**
 * Generic command type
 */
export type GenericCommandType = CommandType<GenericDomain, ReadonlyRecord<string, CommandPropertiesSchema<unknown>>>;
