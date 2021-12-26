import { type ProcessorFactory } from '../processor-factory';
import { type TemplateProcessor } from './template-processor';
import { type TemplateProcessorOptions } from './template-processor-options';

/**
 * Template processor factory
 * @template Options Options type
 * @template ProcessorType Template processor type
 */
export type TemplateProcessorFactory<
  Options extends TemplateProcessorOptions,
  ProcessorType extends TemplateProcessor
> = ProcessorFactory<Options, ProcessorType>;
