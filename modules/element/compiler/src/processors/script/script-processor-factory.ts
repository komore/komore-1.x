import { type ProcessorFactory } from '@komore/element/compiler/processor';
import { type ScriptProcessor } from './script-processor';

/**
 * Script processor factory
 */
export interface ScriptProcessorFactory extends ProcessorFactory<unknown, ScriptProcessor> {}
