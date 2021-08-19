import type { ProcessorFactory } from '../processor-factory';
import type { TemplateProcessor } from './template-processor';

/**
 * Template processor factory
 * @template Options Options type
 * @template ProcessorType Template processor type
 */
export interface TemplateProcessorFactory<
  Options extends Record<string, unknown>,
  ProcessorType extends TemplateProcessor
> extends ProcessorFactory<Options, ProcessorType> {
  readonly fileNameRegExp: RegExp;
}
