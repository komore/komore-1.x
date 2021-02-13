import type { ProcessorOptions } from '../processor-options';

/**
 * Script processor options
 */
export interface ScriptProcessorOptions extends ProcessorOptions {
  readonly processEvents: boolean;
  readonly processMethods: boolean;
  readonly processProperties: boolean;
}
