import type { OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { Printer, SourceFile, TransformerFactory } from 'typescript';
import { createPrinter, createSourceFile, NewLineKind, ScriptKind, ScriptTarget, transform } from 'typescript';
import type { ElementEventDefinition } from '../../../definition/element-event-definition';
import type { ElementMethodDefinition } from '../../../definition/element-method-definition';
import type { ElementPropertyDefinition } from '../../../definition/element-property-definition';
import type { ScriptProcessor } from '../script-processor';
import type { ScriptProcessorInput } from '../script-processor-input';
import type { ScriptProcessorOutput } from '../script-processor-output';
import { createTypeScriptEventTransformerFactory } from './create-typescript-event-transformer-factory';
import { createTypeScriptImportTransformerFactory } from './create-typescript-import-transformer-factory';
import { createTypeScriptMethodTransformerFactory } from './create-typescript-method-transformer-factory';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';
import type { TypeScriptProcessorOptions } from './typescript-processor-options';

/**
 * Creates a TypeScript processor
 * @param options TypeScript processor options
 */
export function createTypeScriptProcessor(options: TypeScriptProcessorOptions): ScriptProcessor {
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  return input$ => input$.pipe(buildInput(options), transformSource(), buildOutput(printer));
}

/**
 * Creates an operator function that builds a TypeScript source representation
 * @param options TypeScript processor options
 * @returns Operator function
 */
function buildInput(
  options: TypeScriptProcessorOptions
): OperatorFunction<ScriptProcessorInput, TypeScriptProcessorInput> {
  const scriptTarget = options.scriptTarget ?? ScriptTarget.Latest;
  const scriptKind = ScriptKind.TS;

  return map(input => ({
    ...input,
    sourceFile: createSourceFile(input.sourceFileName, input.sourceContent, scriptTarget, undefined, scriptKind),
    transformerInputs: getTransformerInputs(options)
  }));
}

function transformSource(): OperatorFunction<TypeScriptProcessorInput, TypeScriptProcessorOutput> {
  return map(input => {
    const transformerFactories = [...input.transformerInputs.transformerFactories];
    const transformationResult = transform(input.sourceFile, transformerFactories);
    const transformedSourceFiles = transformationResult.transformed;
    const transformedSourceFile = transformedSourceFiles[0];

    return {
      ...input,
      transformedSourceFile
    };
  });
}

function buildOutput(printer: Printer): OperatorFunction<TypeScriptProcessorOutput, ScriptProcessorOutput> {
  return pipe(
    map(output => ({
      sourceFile: output.transformedSourceFile,
      sourceContent: printer.printFile(output.transformedSourceFile),
      eventDefinitions: [],
      methodDefinitions: [],
      propertyDefinitions: []
    }))
  );
}

/**
 * Gets a list of transformer factories based on input options
 * @param options TypeScript processor options
 * @returns List of transformer factories
 */
function getTransformerInputs(options: TypeScriptProcessorOptions): TypeScriptTransformerInputs {
  const { processEvents, processMethods, processProperties } = options;
  const eventDefinitions: Array<ElementEventDefinition> = [];
  const methodDefinitions: Array<ElementMethodDefinition> = [];
  const propertyDefinitions: Array<ElementPropertyDefinition> = [];
  const transformerFactories: Array<TransformerFactory<SourceFile>> = [createTypeScriptImportTransformerFactory()];

  if (processEvents) {
    const eventTransformerFactory = createTypeScriptEventTransformerFactory(eventDefinition =>
      eventDefinitions.push(eventDefinition)
    );
    transformerFactories.push(eventTransformerFactory);
  }

  if (processMethods) {
    const methodTransformerFactory = createTypeScriptMethodTransformerFactory(methodDefinition =>
      methodDefinitions.push(methodDefinition)
    );
    transformerFactories.push(methodTransformerFactory);
  }

  if (processProperties) {
    const propertyTransformerFactory = createTypeScriptPropertyTransformerFactory(propertyDefinition =>
      propertyDefinitions.push(propertyDefinition)
    );
    transformerFactories.push(propertyTransformerFactory);
  }

  return {
    eventDefinitions,
    methodDefinitions,
    propertyDefinitions,
    transformerFactories
  };
}

/**
 * TypeScript processor input
 */
interface TypeScriptProcessorInput extends ScriptProcessorInput {
  readonly sourceFile: SourceFile;
  readonly transformerInputs: TypeScriptTransformerInputs;
}

interface TypeScriptProcessorOutput extends TypeScriptProcessorInput {
  readonly transformedSourceFile: SourceFile;
}

interface TypeScriptTransformerInputs {
  readonly eventDefinitions: ReadonlyArray<ElementEventDefinition>;
  readonly methodDefinitions: ReadonlyArray<ElementMethodDefinition>;
  readonly propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>;
  readonly transformerFactories: ReadonlyArray<TransformerFactory<SourceFile>>;
}
