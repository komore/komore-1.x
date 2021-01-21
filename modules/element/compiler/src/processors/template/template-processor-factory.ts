import type { ProcessorFactory } from '../processor-factory';
import type { TemplateProcessor } from './template-processor';

/**
 * Template processor factory
 */
export interface TemplateProcessorFactory extends ProcessorFactory<unknown, TemplateProcessor> {}
