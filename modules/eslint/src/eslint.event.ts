import { type ESLint } from 'eslint';

import { createEventType, eventProperties } from '@komore/event';

import { esLintDomain } from './eslint.domain';

/**
 * ESLint event
 */
export const esLintEvent = createEventType(esLintDomain, {
  /**
   * Files have been linted
   *
   * @see {@link https://eslint.org/docs/latest/integrate/nodejs-api#-eslintlintfilespatterns ESLint.lintFiles}
   */
  filesLinted: eventProperties<{ results: ReadonlyArray<ESLint.LintResult> }>(),
});
