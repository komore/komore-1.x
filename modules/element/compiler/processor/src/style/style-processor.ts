import { type Processor } from '../processor';
import { type StyleProcessorInput } from './style-processor-input';
import { type StyleProcessorOutput } from './style-processor-output';

/**
 * Style processor
 */
export interface StyleProcessor extends Processor<StyleProcessorInput, StyleProcessorOutput> {
  readonly _?: undefined;
}
