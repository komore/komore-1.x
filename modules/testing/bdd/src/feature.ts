import { type Scenario } from './scenario';

/**
 * Feature
 */
export interface Feature {
  /**
   * Source path for the feature, optionally including a line and column number
   */
  readonly sourcePath: string;
  /**
   * Child features or scenarios
   */
  readonly children: ReadonlyArray<Feature | Scenario>;
  readonly background?: Feature | Scenario;
}
