import { type ESLint } from 'eslint';

/**
 * Returns true if there is at least one error, fatal error or warning in an ESLint result
 *
 * @param eslintResult ESLint result
 * @returns true if there is at least one error, fatal error or warning in an ESLint result
 * @private
 */
export function eslintResultWithIssues(eslintResult: ESLint.LintResult): boolean {
  const { errorCount, fatalErrorCount, warningCount } = eslintResult;
  return errorCount > 0 || fatalErrorCount > 0 || warningCount > 0;
}
