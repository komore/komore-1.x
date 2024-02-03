import { type FeatureBlock } from './feature-block';
import { type ScenarioBlockByName } from './scenario-block-by-name';

/**
 * Defines a feature
 *
 * Any JSDoc above a feature call is used as the description for the feature.
 *
 * @param featureTitle Feature title
 * @param featureBlock Feature block
 */
export function feature(featureTitle: string, featureBlock: FeatureBlock): void;
export function feature(featureTitle: string, scenarios: ScenarioBlockByName): void;

export function feature(featureTitle: string, featureBlockOrScenarios: FeatureBlock | ScenarioBlockByName): void {
  if (typeof featureBlockOrScenarios === 'function') {
    const featureBlock = featureBlockOrScenarios;
    featureBlock;
    throw new Error(`not implemented: feature("${featureTitle}") with a function feature block`);
  } else {
    const scenarios = featureBlockOrScenarios;
    scenarios;
    throw new Error(`not implemented: feature("${featureTitle}") with a set of scenarios`);
  }
}
