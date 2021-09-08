import type { OperatorFunction } from '@komore/reactive';
import { map, pipe } from '@komore/reactive/operators';
import type { SourceFile } from 'typescript';
import { createSourceFile, ScriptKind, ScriptTarget } from 'typescript';
import { buildSpecificationFromSourceFile } from './build-specification-from-source-file';
import type { Specification } from './specification';
import type { SpecificationInput } from './specification-input';
import type { SpecificationProcessingOptions } from './specification-processing-options';

export function processSpecification(options?: SpecificationProcessingOptions): OperatorFunction<SpecificationInput, Specification> {
  const scriptTarget = options?.scriptTarget ?? ScriptTarget.Latest;
  const scriptKind = ScriptKind.TS;
  return pipe(
    withSourceFile(scriptKind, scriptTarget),
    map(([, sourceFile]) => buildSpecificationFromSourceFile(sourceFile))
  );
}

/**
 * Creates an observable that adds a source file to each emitted specification input
 * @param scriptKind Script kind
 * @param scriptTarget Script target
 * @returns Operator function that adds a source file to each emitted specification input
 */
function withSourceFile(
  scriptKind: ScriptKind,
  scriptTarget: ScriptTarget
): OperatorFunction<SpecificationInput, [SpecificationInput, SourceFile]> {
  return map(input => [
    input,
    createSourceFile(input.sourcePath, input.sourceContent, scriptTarget, undefined, scriptKind)
  ]);
}
