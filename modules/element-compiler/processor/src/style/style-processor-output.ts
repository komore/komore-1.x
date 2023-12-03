import { type ProcessorOutput } from '../processor-output';

/**
 * Processed style sheet
 */
export interface StyleProcessorOutput extends ProcessorOutput {
  /**
   * CSS style sheet
   */
  readonly cssStyleSheet: CSSStyleSheet;
  /**
   * Property definitions
   */
  readonly propertyDefinitions: ReadonlyArray<PropertyDefinition>;
  /**
   * Referenced properties
   */
  readonly referencedProperties: ReadonlySet<string>;
}
