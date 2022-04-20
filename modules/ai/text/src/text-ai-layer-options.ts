/**
 * Text AI layer options
 */
export interface TextAiLayerOptions {
  /**
   * Platform to use (defaults to auto-detection)
   */
  readonly platform: 'aws' | 'azure' | 'gcloud';
}
