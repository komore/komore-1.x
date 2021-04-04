import type { Observable } from '@komore/reactive';
import { defer, fromArray } from '@komore/reactive';
import { toArray } from '@komore/reactive/operators';
import { processSpecification } from './process-specification';
import type { Specification } from './specification';
import type { SpecificationInput } from './specification-input';
import type { SpecificationProcessingOptions } from './specification-processing-options';

/**
 * Process specifications
 * @param inputs Specification inputs
 * @param options Specification processing options
 * @returns List of specification
 */
export function processSpecifications(
  inputs: ReadonlyArray<SpecificationInput>,
  options?: SpecificationProcessingOptions
): Observable<ReadonlyArray<Specification>> {
  return defer(() => fromArray(inputs)).pipe(
    processSpecification(options),
    toArray()
  );
}
