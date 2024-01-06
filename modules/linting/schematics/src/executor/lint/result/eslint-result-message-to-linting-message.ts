import { type ESLint, type Linter } from 'eslint';

import { type LintingMessage } from '../message/linting-message';

/**
 * Creates a function that returns an linting messages, given an ESLint result
 *
 * @param eslintResult ESLint result
 * @returns Function that returns an linting messages, given an ESLint result
 */
export function eslintResultMessageToLintingMessage(
  eslintResult: ESLint.LintResult
): (eslintMessage: Linter.LintMessage) => LintingMessage {
  const { filePath } = eslintResult;
  return eslintMessage => {
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
  };
}
