import { type TSESLint } from '@typescript-eslint/experimental-utils';

/**
 * Recommended configuration
 */
export const recommended: TSESLint.Linter.Config = {
  plugins: ['@komore/reactive/eslint']
};
