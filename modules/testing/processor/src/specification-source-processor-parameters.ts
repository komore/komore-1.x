/**
 * Specification source processor parameters
 */
export interface SpecificationSourceProcessorParameters {
  /**
   * File name
   */
  readonly fileName: string;
  /**
   * Test pattern
   */
  readonly testPattern?: RegExp;
}
