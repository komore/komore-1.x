import { type ElementEventDefinitionRecorder } from '../definition/element-event-definition-recorder';
import { type ProcessorInput } from '../processor-input';

/**
 * Script processor input
 */
export interface ScriptProcessorInput extends ProcessorInput {
  readonly eventDefinitionRecorder: ElementEventDefinitionRecorder;
  readonly propertyDefinitionRecorder: ElemenntPro
}
