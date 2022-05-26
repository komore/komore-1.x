import { objectToEntries } from '@komore/functional';
import { type Observable } from '@komore/reactive';
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
export function feature(featureTitle: string, scenarios: ScenarioRecord): void;

export function feature(featureTitle: string, featureBlockOrScenarios: FeatureBlock | ScenarioRecord): void {
  // TODO:post-jest throw new SpecificationNotPreprocessedError('feature');
  if (typeof featureBlockOrScenarios === 'function') {
    const featureBlock = featureBlockOrScenarios;
    return describe(featureTitle, featureBlock);
  } else {
    const scenarios = featureBlockOrScenarios;
    return describe(featureTitle, () => {
      // TODO: detect when name starts with TODO:
      objectToEntries(scenarios).forEach(([scenarioTitle, scenario]) => {
        it(scenarioTitle, scenario as () => void);
      });
    });
  }
}

type FeatureBlock = () => void | Promise<void> | Observable<void>;
interface ScenarioRecord {
  [scenarioName: string]: () => void | Promise<void> | Observable<void>;
}
