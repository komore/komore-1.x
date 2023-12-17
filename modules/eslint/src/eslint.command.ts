import { commandProperties, createCommandType } from '@komore/command';

import { esLintDomain } from './eslint.domain';

/**
 * ESLint command
 */
export const esLintCommand = createCommandType(esLintDomain, {
  /**
   * Lints files
   *
   * @see {@link https://eslint.org/docs/latest/integrate/nodejs-api#-eslintlintfilespatterns ESLint.lintFiles}
   */
  lintFiles: commandProperties<{ filePatterns: ReadonlyArray<string> }>(),
});
