import { type Processor } from '../processor';
import { type ScriptProcessorInput } from './script-processor-input';
import { type ScriptProcessorOutput } from './script-processor-output';

/**
 * Script processor
 * @template Input Script processor input type
 * @template Output Script processor output type
 */
export interface ScriptProcessor<Input extends ScriptProcessorInput, Output extends ScriptProcessorOutput>
  extends Processor<Input, Output> {
  readonly _?: undefined;
}
