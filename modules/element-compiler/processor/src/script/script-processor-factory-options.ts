import { type ScriptTarget } from 'typescript';
import { type ProcessorFactoryOptions } from '../processor-factory-options';

/**
 * Script processor factory options
 */
export interface ScriptProcessorFactoryOptions extends ProcessorFactoryOptions {
  /**
   * Script target
   */
  readonly scriptTarget: ScriptTarget;
}
