import { type TypeCreator } from '@komore/typescript';

/**
 * Command creator
 *
 * @template CommandName Command name
 * @template TypeCreatorType Type creator type
 * @private
 */
export type CommandCreator<CommandName extends string, TypeCreatorType extends TypeCreator<any, any>> = {
  /**
   * Command name
   */
  readonly name: CommandName;
} & TypeCreatorType;
