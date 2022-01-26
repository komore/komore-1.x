import { type SourceFile, type TransformerFactory } from 'typescript';
import { type TypeScriptScriptProcessorContext } from '../typescript-script-processor-context';
import { type ObservableTransformerFactory } from '../transformer/observable-transformer-factory';
import { ElementEventDefinition } from '@komore/element/compiler/processor';

/**
 * Creates a TypeScript event transformer factory
 * @param context TypeScript script processor context
 * @returns TypeScript event transformer
 */
export function createTypeScriptEventTransformerFactory(
  _context: TypeScriptScriptProcessorContext
): ObservableTransformerFactory<ElementEventDefinition> {
  return {
    
  }
  return _transformationContext => {
    return node => node;
  };
}
