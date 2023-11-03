import { type GenericDomain } from '@komore/domain';
import { type TypeSchemaType } from '@komore/typescript';

import { type Command } from '../command';
import { type GenericCommand } from '../generic-command';

/**
 * Command properties type
 *
 * @template CommandType Command type
 */
export type CommandPropertiesType<CommandType extends GenericCommand> = CommandType extends Command<
  GenericDomain,
  string,
  infer SchemaType
>
  ? TypeSchemaType<SchemaType>
  : never;
