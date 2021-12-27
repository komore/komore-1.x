/**
 * Returns a function that tests whether a GPU adapter has specific features
 * @param featureNames List of features
 * @returns Function that tests whether a GPU adapter has the specified features
 * @template FeatureNames Feature names
 */
export function hasGPUAdapterFeature<FeatureNames extends ReadonlyArray<string>>(
  ...featureNames: FeatureNames
): (gpuAdapter: GPUAdapter) => boolean {
  return gpuAdapter => featureNames.every(featureName => gpuAdapter.features.has(featureName));
}
