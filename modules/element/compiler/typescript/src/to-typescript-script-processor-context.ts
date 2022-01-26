import { createSourceFile, ScriptKind } from 'typescript';
import { type TypeScriptScriptProcessorContext } from './typescript-script-processor-context';
import { type TypeScriptScriptProcessorFactoryOptions } from './typescript-script-processor-factory-options';
import { type TypeScriptScriptProcessorInput } from './typescript-script-processor-input';
import { type TypeScriptScriptProcessorOptions } from './typescript-script-processor-options';

export function toTypeScriptScriptProcessorContext(
  factoryOptions: TypeScriptScriptProcessorFactoryOptions,
  _processorOptions: TypeScriptScriptProcessorOptions
): (input: TypeScriptScriptProcessorInput) => TypeScriptScriptProcessorContext {
  const { scriptTarget } = factoryOptions;
  const scriptKind = ScriptKind.TS;
  return input => {
    const { source, url } = input;
    const sourceFile = createSourceFile(url.toString(), source, scriptTarget, undefined, scriptKind);
    return {
      ...input,
      sourceFile,
      transformers: {
        eventDefinitions: createEventDefinitionObservableTransformerFactory(),
        methodDefinitions: createMethodDefinitionObservableTransformerFactory(),
        propertyDefinitions: createPropertyDefinitionObservableTransformerFactory()
      }
    };
  };
}
