import { TSESLint } from '@typescript-eslint/experimental-utils';
import { resolve } from 'path';
import { type RuleTester } from './rule-tester';
import { type RuleTesterOptions } from './rule-tester-options';

/**
 * Creates a rule tester
 * @param options Rule tester options
 * @returns Rule tester
 */
export function createRuleTester(options: RuleTesterOptions): RuleTester {
  TSESLint.RuleTester.describe = describe;
  TSESLint.RuleTester.it = it;
  
  const eslintRuleTester = new TSESLint.RuleTester({
    parser: resolve('./node_modules/@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 2020,
      project: options.project,
      sourceType: 'script'
    }
  });

  return () => {
    eslintRuleTester.run
  };
}
