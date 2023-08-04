import { objectToEntries } from '@komore/functional';

import { type ScenarioBlock } from './scenario-block';
import { type FeatureBlock } from './feature-block';

//import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Defines a feature
 *
 * Any JSDoc above a feature call is used as the description for the feature.
 *
 * @param featureTitle Feature title
 * @param featureBlock Feature block
 */
export function feature(featureTitle: string, featureBlock: FeatureBlock): void;
export function feature(featureTitle: string, scenarios: { readonly [scenarioName: string]: ScenarioBlock }): void;

export function feature(
  featureTitle: string,
  featureBlockOrScenarios: FeatureBlock | { readonly [scenarioName: string]: ScenarioBlock } | () =>
): void {
  // TODO:post-jest throw new SpecificationNotPreprocessedError('feature');
  if (typeof featureBlockOrScenarios === 'function') {
    const featureBlock = featureBlockOrScenarios;
    return describe(featureTitle, featureBlock);
  } else {
    const scenarios = featureBlockOrScenarios;
    return describe(featureTitle, () => {
      objectToEntries(scenarios).forEach(([scenarioTitle, scenario]) => {
        it(scenarioTitle, scenario as () => void);
      });
    });
  }
}
