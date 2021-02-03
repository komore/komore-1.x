import type { ElementPropertyDefinitionRecorder } from '../../definition/element-property-definition-recorder';

/**
 * Script processor input
 */
export interface ScriptProcessorInput {
  readonly propertyDefinitionRecorder?: ElementPropertyDefinitionRecorder;
  readonly sourceContent: string;
}
