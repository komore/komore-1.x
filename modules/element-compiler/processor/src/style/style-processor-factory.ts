import { type ProcessorFactory } from '../processor-factory';
import { type StyleProcessor } from './style-processor';
import { type StyleProcessorOptions } from './style-processor-options';

/**
 * Style processor factory
 */
export type StyleProcessorFactory<ProcessorOptions extends StyleProcessorOptions> = ProcessorFactory<
  ProcessorOptions,
  StyleProcessor
>;
