import { type Feature } from './feature';

/**
 * Specification
 */
export interface Specification {
  readonly features: ReadonlyArray<Feature>;
}
