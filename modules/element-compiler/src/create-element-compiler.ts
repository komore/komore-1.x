import { documentFragmentToParsedSource } from '@komore/element/parser';
import { empty, map, switchMap } from '@komore/reactive';
import { toProcessedSource } from './processors/to-processed-source';
import { type ElementCompiler } from './element-compiler';
import { type ElementCompilerOptions } from './element-compiler-options';
import { toCompiledElement } from './to-compiled-element';
import { toDocumentFragment } from './to-document-fragment';

export function createElementCompiler(compilerOptions: ElementCompilerOptions): ElementCompiler {
  const scriptResourceLoader = () => empty;
  const styleResourceLoader = () => empty;
  return source =>
    source.pipe(
      map(toDocumentFragment),
      switchMap(documentFragmentToParsedSource(scriptResourceLoader, styleResourceLoader)),
      switchMap(toProcessedSource()),
      switchMap(toCompiledElement(compilerOptions))
    );
}
