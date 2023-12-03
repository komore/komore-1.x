import { type Processor } from '../processor';
import { type TemplateProcessorInput } from './template-processor-input';
import { type TemplateProcessorOutput } from './template-processor-output';

/**
 * Template processor
 */
export interface TemplateProcessor extends Processor<TemplateProcessorInput, TemplateProcessorOutput> {
  readonly _?: undefined;
}
