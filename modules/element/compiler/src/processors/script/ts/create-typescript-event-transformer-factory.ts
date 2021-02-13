import type { SourceFile, TransformerFactory } from 'typescript';
import type { ElementEventDefinitionRecorder } from '../../../definition/element-event-definition-recorder';

/**
 * Creates a TypeScript event transformer factory
 * @returns TypeScript event transformer
 */
export function createTypeScriptEventTransformerFactory(
  _eventDefinitionRecorder: ElementEventDefinitionRecorder
): TransformerFactory<SourceFile> {
  return _transformationContext => {
    return node => node;
  };
}
