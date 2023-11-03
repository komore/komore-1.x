import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type CommandPropertiesSchema } from './properties/command-properties-schema';
import { type CommandType as CommandDictionaryType } from './type/command-type';

/**
 * Command
 *
 * @template DomainType Domain type
 * @template CommandName Command name
 * @template SchemaType Command properties schema type
 */
export type Command<
  DomainType extends GenericDomain,
  CommandType extends CommandDictionaryType<DomainType, ReadonlyRecord<string, CommandPropertiesSchema<unknown>>>,
  CommandName extends string,
  SchemaType extends CommandPropertiesSchema<unknown>,
> = {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Command name
   */
  readonly name: CommandName;
  /**
   * Command parameters
   */
  readonly parameters: TypeSchemaType<SchemaType>;
  /**
   * Command type
   */
  readonly type: CommandType;
};
