import { type Observable } from '@komore/reactive';
//import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Defines a scenario
 *
 * @param scenarioTitle Scenario title
 * @param scenarioBlock Scenario block
 */
export function scenario(scenarioTitle: string, scenarioBlock: () => void | Promise<void> | Observable<void>): void {
  return it(scenarioTitle, scenarioBlock as () => void);
  // TODO: post-jest throw new SpecificationNotPreprocessedError('scenario');
}
