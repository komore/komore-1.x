import { type FeatureBlock } from './feature-block';
import { type ScenarioBlock } from './scenario-block';

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
  featureBlockOrScenarios: FeatureBlock | { readonly [scenarioName: string]: ScenarioBlock }
): void {
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
