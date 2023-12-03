import { type Observable } from '@komore/reactive';
import { type ProcessorInput } from './processor-input';
import { type ProcessorOutput } from './processor-output';

/**
 * Processor
 * @template Input Processor input type
 * @template Output Processor output type
 */
export interface Processor<Input extends ProcessorInput, Output extends ProcessorOutput> {
  (input: Input): Observable<Output>;
}
