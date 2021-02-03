import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import type { Printer, SourceFile } from 'typescript';
import { createPrinter, createSourceFile, NewLineKind, ScriptKind, ScriptTarget, transform } from 'typescript';
import type { ScriptProcessor } from '../script-processor';
import type { ScriptProcessorInput } from '../script-processor-input';
import { createTypeScriptImportTransformerFactory } from './create-typescript-import-transformer-factory';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';
import type { TypeScriptProcessorOptions } from './typescript-processor-options';

/**
 * Creates a TypeScript processor
 * @param _
 */
export function createTypeScriptProcessor(_: TypeScriptProcessorOptions): ScriptProcessor {
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });

  return scriptProcessorInput$ =>
    scriptProcessorInput$.pipe(
      buildSource(ScriptTarget.ES2020, ScriptKind.TS),
      transformSource(),
      map(printSource(printer))
    );
}

function buildSource(scriptTarget: ScriptTarget, scriptKind: ScriptKind): OperatorFunction<ScriptProcessorInput, TypeScriptProcessorInput> {
  return map(input => ({
    ...input,
    sourceFile: createSourceFile('hello-world-file', input.sourceContent, scriptTarget, undefined, scriptKind)
  }));
}

function transformSource(): OperatorFunction<TypeScriptProcessorInput, TypeScriptProcessorOutput> {
  return map(input => {
    const transformationResult = transform(input.sourceFile, [
      createTypeScriptImportTransformerFactory(),
      createTypeScriptPropertyTransformerFactory(input.propertyDefinitionRecorder)
    ]);
    const transformedSourceFiles = transformationResult.transformed;
    const transformedSourceFile = transformedSourceFiles[0];

    return {
      ...input,
      transformedSourceFile
    };
  });
}

function printSource(printer: Printer) {
  return (sourceFile: SourceFile) => ({
    sourceContent: printer.printFile(sourceFile),
    sourceFile
  });
}

/**
 * TypeScript processor input
 */
interface TypeScriptProcessorInput extends ScriptProcessorInput {
  readonly sourceFile: SourceFile;
}

interface TypeScriptProcessorOutput extends TypeScriptProcessorInput {
  readonly transformedSourceFile: SourceFile;
}
