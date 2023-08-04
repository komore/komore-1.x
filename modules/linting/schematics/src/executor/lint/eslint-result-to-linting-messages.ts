import { type ESLint } from 'eslint';

import { LintingMessage } from './linting-message';

/**
 * Returns a list of linting messages, given an ESLint result
 *
 * @param eslintResult ESLint result
 * @returns List of lint messages
 */
export function eslintResultToLintResultMessages(eslintResult: ESLint.LintResult): ReadonlyArray<LintingMessage> {
  const { filePath, messages } = eslintResult;
  return messages.map(({ column, line: row, message, ruleId }) => {
    if (ruleId !== null) {
      console.log('AHA!', ruleId);
    }

    return { column, filePath, row, message };
  });
}
