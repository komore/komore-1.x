import { forkJoin, map, toArray, type Observable } from '@komore/reactive';
import { transform } from 'typescript';
import { type TypeScriptScriptProcessorContext } from './typescript-script-processor-context';
import { type TypeScriptScriptProcessorOutput } from './typescript-script-processor-output';

/**
 * Creates a function that generates a TypeScript script processor output, analyzing the source to extract definitions
 * @returns Function that generates a TypeScript script processor output
 */
export function toTypeScriptScriptProcessorOutput(): (
  context: TypeScriptScriptProcessorContext
) => Observable<TypeScriptScriptProcessorOutput> {
  return ({ sourceFile, transformers }) => {
    const transformerFactories = [
      transformers.eventDefinitions.factory,
      transformers.methodDefinitions.factory,
      transformers.propertyDefinitions.factory
    ];
    const transformationResult = transform(sourceFile, transformerFactories);
    const transformedSourceFiles = transformationResult.transformed;
    const transformedSourceFile = transformedSourceFiles[0];

    return forkJoin({
      eventDefinitions: transformers.eventDefinitions.observable.pipe(toArray()),
      methodDefinitions: transformers.methodDefinitions.observable.pipe(toArray()),
      propertyDefinitions: transformers.propertyDefinitions.observable.pipe(toArray())
    }).pipe(
      map(definitions => ({
        ...definitions,
        errors: [],
        sourceFile: transformedSourceFile
      }))
    );
  };
}
