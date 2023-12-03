import { map, type OperatorFunction, of, pipe } from '@komore/reactive';
import {
  type ElementEventDefinition,
  type ElementMethodDefinition,
  type ElementPropertyDefinition
} from '@komore/element/compiler/processor';
import {
  createPrinter,
  NewLineKind,
  type Printer,
  type SourceFile,
  transform,
  type TransformerFactory
} from 'typescript';
import { createTypeScriptEventTransformerFactory } from './create-typescript-event-transformer-factory';
import { createTypeScriptImportTransformerFactory } from './create-typescript-import-transformer-factory';
import { createTypeScriptMethodTransformerFactory } from './create-typescript-method-transformer-factory';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';
import { type TypeScriptScriptProcessorOptions } from './typescript-script-processor-options';
import { type TypeScriptScriptProcessor } from './typescript-script-processor';
import { toTypeScriptScriptProcessorContext } from './to-typescript-script-processor-context';

/**
 * Creates a TypeScript processor
 * @param options TypeScript script processor options
 */
export function createTypeScriptScriptProcessor(options: TypeScriptScriptProcessorOptions): TypeScriptScriptProcessor {
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  return input =>
    of(input).pipe(
      map(toTypeScriptScriptProcessorContext(factoryOptions, options)),
      map(toTypeScriptScriptProcessorOutput())
    );
}
