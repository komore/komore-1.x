import { type SpecificationSourceProcessorParameters } from './specification-source-processor-parameters';
import { type SpecificationSourceProcessorResult } from './specification-source-processor-result';

/**
 * Specification source processor
 */
export interface SpecificationSourceProcessor {
  (parameters: SpecificationSourceProcessorParameters): Observable<SpecificationSourceProcessorResult>;
}
