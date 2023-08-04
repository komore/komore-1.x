import { type Observable } from '@komore/reactive';

/**
 * Feature block
 */
export interface FeatureBlock {
  (): void | Observable<void> | Promise<void>;
}
