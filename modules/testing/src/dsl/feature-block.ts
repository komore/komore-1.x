/**
 * Feature block
 */
export interface FeatureBlock {
  (): void | Observable<void> | Promise<void>;
}
