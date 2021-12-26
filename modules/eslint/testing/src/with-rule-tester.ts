import { createRuleTester } from './create-rule-tester';
import { type RuleTesterOptions } from './rule-tester-options';
import { type RuleTesterUtilities } from './rule-tester-utilities';

export function withRuleTester(options: RuleTesterOptions, callback: (utilities: RuleTesterUtilities) => void): void {
  const ruleTester = createRuleTester(options);

  const it: jest.It = {
    each: 
  }
}
