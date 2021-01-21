import type { ProcessorFactory } from '../processor-factory';
import type { ScriptProcessor } from './script-processor';

/**
 * Script processor factory
 */
export interface ScriptProcessorFactory extends ProcessorFactory<unknown, ScriptProcessor> {}
