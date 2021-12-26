import { type TSESLint } from '@typescript-eslint/experimental-utils';
import { noRxJSImport } from './no-rxjs-import';

/**
 * Rules
 */
export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
  'no-rxjs-import': noRxJSImport
};
