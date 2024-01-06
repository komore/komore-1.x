import { type ESLint } from 'eslint';

import { type LintingMessage } from '../message/linting-message';
import { eslintResultMessageToLintingMessage } from './eslint-result-message-to-linting-message';

export function eslintResultToLintingMessages(eslintResult: ESLint.LintResult): ReadonlyArray<LintingMessage> {
  return eslintResult.messages.map(eslintResultMessageToLintingMessage(eslintResult));
}
