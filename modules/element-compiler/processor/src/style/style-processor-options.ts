import { type ProcessorOptions } from '../processor-options';

/**
 * Style processor options
 */
export interface StyleProcessorOptions extends ProcessorOptions {
  readonly generateSourceMap: boolean;
}
