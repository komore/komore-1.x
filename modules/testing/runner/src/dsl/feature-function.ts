import { type Observable } from '@komore/reactive';

/**
 * feature() function signature
 */
export interface FeatureFunction {
  /**
   * Defines a feature
   *
   * Any JSDoc above a feature call is used as the description for the feature.
   *
   * @param featureTitle Feature title
   * @param featureBlock Feature block
   */
  (featureTitle: string, featureBlock: () => void | Promise<void> | Observable<void>): void;
}
