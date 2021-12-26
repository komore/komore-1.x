import { type ProcessorOptions } from '@komore/element/compiler/processor';

/**
 * Script processor options
 */
export interface ScriptProcessorOptions extends ProcessorOptions {
  readonly processEvents: boolean;
  readonly processMethods: boolean;
  readonly processProperties: boolean;
}
