import { type Observable } from '@komore/reactive';

/**
 * rule() function signature
 */
export interface RuleFunction {
  /**
   * Defines a rule
   *
   * @param ruleTitle Rule title
   * @param ruleBlock Rule block
   */
  (ruleTitle: string, ruleBlock: () => void | Promise<void> | Observable<void>): void;
}
