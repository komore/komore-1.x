import { type ScenarioBlock } from './scenario-block';

import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Defines a scenario
 *
 * @param scenarioTitle Scenario title
 * @param scenarioBlock Scenario block
 */
export function scenario(_scenarioTitle: string, _scenarioBlock: ScenarioBlock): void {
  throw new SpecificationNotPreprocessedError('scenario');
}
