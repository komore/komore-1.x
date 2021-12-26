import { type Feature } from './feature';

/**
 * Feature recorder
 */
export interface FeatureRecorder {
  (feature: Feature): void;
}
