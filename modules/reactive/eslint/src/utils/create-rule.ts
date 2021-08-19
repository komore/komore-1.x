import { ESLintUtils } from '@typescript-eslint/experimental-utils';

/**
 * Creates a rule
 * @returns Rule
 */
export const createRule = ESLintUtils.RuleCreator(
  name => `https://komore.dev/modules/reactive/linting#${name}`
);
