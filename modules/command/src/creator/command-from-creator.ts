import { type TypeCreator } from '@komore/typescript';

import { type CommandCreator } from './command-creator';

/**
 * Command from a creator type
 *
 * @template CreatorType Creator type
 * @private
 */
export type CommandFromCreator<CreatorType extends CommandCreator<string, TypeCreator<any, any>>> =
  ReturnType<CreatorType>;
