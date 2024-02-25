/**
 * Specification source processor options
 */
export interface SpecificationSourceProcessorOptions {
  /**
   * Whether the specification should be extracted from the source
   */
  readonly extractSpecification: boolean;
  /**
   * TypeScript configuration file path
   */
  readonly tsConfigPath: string;
}
