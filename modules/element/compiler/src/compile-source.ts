import type { ParsedSource } from '@komore/element/parser';
import { parseSource } from '@komore/element/parser';
import type { Observable } from '@komore/reactive';
import { defer, EMPTY, of } from '@komore/reactive';
import { map, switchMap } from '@komore/reactive/operators';
import type { NodeFactory } from 'typescript';
import { createElementClassDeclaration } from './class/create-element-class-declaration';
import { generateStyle } from './generate-style';
import { buildElementDefinition } from './definition/build-element-definition';
import { processSource } from './processors/process-source';
import { createElementInterfaceDeclaration } from './interface/create-element-interface-declaration';
import { createElementEventMap } from './event/create-element-event-map';
import { buildElementDefinitionWith } from './definition/build-element-definition-with';
import { toDocumentFragment } from './to-document-fragment';

/**
 * Compiles an element source
 *
 * An element source is split into three categories:
 * - &lt;script> elements are processed as scripts
 * - &lt;style> and &lt;link> elements are processed as styles
 * - any remaining element is processed as a template
 *
 * @param factory TypeScript node factory
 * @param source Source
 */
export function compileSource(factory: NodeFactory, source: string): Observable<void> {
  return defer(() => of(source)).pipe(
    map(toDocumentFragment),
    switchMap(toParsedSource()),
    switchMap(toProcessedSource()),
    map(({ elementDefinition }) => {
      const templateElementId = undefined;
      const styleSheetsId = undefined;
      const [elementEventMap] = createElementEventMap(
        factory,
        elementDefinition.className,
        elementDefinition.eventDefinitions ?? []
      );
      const _elementClassDeclaration = createElementClassDeclaration(
        factory,
        elementDefinition,
        templateElementId,
        styleSheetsId
      );
      const _elementInterfaceDeclaration = createElementInterfaceDeclaration(
        factory,
        elementDefinition,
        elementEventMap
      );
    })
  );
}

/**
 * Parses a document fragment
 * @param documentFragment Document fragment
 * @returns Parsed source
 */
function toParsedSource(): (documentFragment: DocumentFragment) => Observable<ParsedSource> {
  return documentFragment =>
    parseSource(
      documentFragment,
      () => EMPTY,
      () => EMPTY
    );
}
