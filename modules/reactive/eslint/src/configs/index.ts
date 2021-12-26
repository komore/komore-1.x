import { type TSESLint } from '@typescript-eslint/experimental-utils';
import { recommended } from './recommended';

/**
 * Configurations
 */
export const configs: Record<string, TSESLint.Linter.Config> = {
  recommended
};
