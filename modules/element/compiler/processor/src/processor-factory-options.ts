import { type ProcessorReporter } from './processor-reporter';

/**
 * Processor factory options
 */
export interface ProcessorFactoryOptions {
  readonly reporter?: ProcessorReporter;
}
