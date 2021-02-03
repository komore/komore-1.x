import type { SourceFile } from 'typescript';
import type { ElementEventDefinition } from '../../definition/element-event-definition';
import type { ElementMethodDefinition } from '../../definition/element-method-definition';
import type { ElementPropertyDefinition } from '../../definition/element-property-definition';

/**
 * Script processor output
 */
export interface ScriptProcessorOutput {
  readonly sourceFile: SourceFile;
  readonly sourceContent: string;
  readonly eventDefinitions: ReadonlyArray<ElementEventDefinition>;
  readonly methodDefinitions: ReadonlyArray<ElementMethodDefinition>;
  readonly propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>;
}
