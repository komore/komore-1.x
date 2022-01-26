import { type ProcessorFactory } from '../processor-factory';
import { type ScriptProcessor } from './script-processor';
import { type ScriptProcessorInput } from './script-processor-input';
import { type ScriptProcessorOptions } from './script-processor-options';
import { type ScriptProcessorOutput } from './script-processor-output';

/**
 * Script processor factory
 * @template Options Options type
 * @template ProcessorType Script processor type
 */
export type ScriptProcessorFactory<
  Options extends ScriptProcessorOptions,
  ProcessorType extends ScriptProcessor<ScriptProcessorInput, ScriptProcessorOutput>
> = ProcessorFactory<Options, ProcessorType>;
