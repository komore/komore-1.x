import { type TypeCreator } from '@komore/typescript';

import { type CommandCreator } from '../creator/command-creator';

/**
 * Command creator entry
 *
 * @private
 */
export type CommandCreatorEntry = readonly [
  commandName: string,
  commandCreator: CommandCreator<string, TypeCreator<any, any>>,
];
