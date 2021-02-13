import type { ParsedSource } from '@komore/element/parser';
import type { ElementDefinition } from '../definition/element-definition';

/**
 * Processed source
 */
export interface ProcessedSource {
  readonly elementDefinition: ElementDefinition;
  readonly parsedSource: ParsedSource;
}
