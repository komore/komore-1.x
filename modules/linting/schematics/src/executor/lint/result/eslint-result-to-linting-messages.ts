import { type ESLint } from 'eslint';

import { type LintingMessage } from '../message/linting-message';

/**
 * Returns a list of linting messages, given an ESLint result
 *
 * @param eslintResult ESLint result
 * @returns List of lint messages
 */
export function eslintResultToLintResultMessages(eslintResult: ESLint.LintResult): ReadonlyArray<LintingMessage> {
  const { filePath, messages } = eslintResult;
  return messages.map(eslintMessage => {
    const { column, endColumn, endLine: endRow, fix, line: row, message, ruleId } = eslintMessage;
    const columns = [column, endColumn ?? column] as const;
    const rows = [row, endRow ?? row] as const;

    return {
      columns,
      filePath,
      ...(fix !== undefined ? { fix } : {}),
      rows,
      message,
      ...(ruleId !== null ? { ruleId } : {}),
    };
  });
}
