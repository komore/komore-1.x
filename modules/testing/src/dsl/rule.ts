//import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Defines a rule
 *
 * @param ruleTitle Rule title
 * @param ruleBlock Rule block
 */
export function rule(ruleTitle: string, ruleBlock: () => void | Promise<void> | Observable<void>): void {
  return describe(ruleTitle, ruleBlock);
  // TODO: post-jest throw new SpecificationNotPreprocessedError('rule');
}
