import { type ReadonlyRecord, type TypeSchemaType } from '@komore/typescript';

import { type CommandPropertiesSchema } from './command-properties-schema';

/**
 * Command properties from command definitions
 *
 * @template CommandDefinitions Command definitions
 */
export type CommandPropertiesFromCommandDefinitions<
  CommandDefinitions extends ReadonlyRecord<string, CommandPropertiesSchema<any>>,
> = {
  [CommandName in keyof CommandDefinitions & string]: TypeSchemaType<CommandDefinitions[CommandName]>;
};
