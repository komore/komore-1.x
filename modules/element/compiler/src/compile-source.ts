import { parseSource } from '@komore/element/parser';
import { JSDOM } from 'jsdom';
import type { Observable } from 'rxjs';
import { defer, EMPTY, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import type { NodeFactory } from 'typescript';
import { createElementClassDeclaration } from './class/create-element-class-declaration';
import { generateScript } from './generate-script';
import { generateStyle } from './generate-style';
import { generateTemplate } from './generate-template';
import { buildElementDefinition } from './definition/build-element-definition';
import { processSource } from './processors/process-source';
import { createElementInterfaceDeclaration } from './interface/create-element-interface-declaration';

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
    map(JSDOM.fragment),
    switchMap(parseDocumentFragment()),
    switchMap(processSource),
    map(processedSource => {
      const { parsedSource = processedSource;
      const elementDefinition = buildElementDefinition(factory, parsedTemplateElement, processedSource);
      const templateElementId = undefined;
      const styleSheetsId = undefined;
      createElementClassDeclaration(factory, elementDefinition, templateElementId, styleSheetsId);
      createElementInterfaceDeclaration(factory, elementDefinition, );

      generateScript(scriptElements);
      generateStyle(styleElements);
      generateTemplate(templateElement);
    }),
  );
}

/**
 * Parses a document fragment
 */
function parseDocumentFragment() {
  return (documentFragment: DocumentFragment) => parseSource(documentFragment, () => EMPTY, () => EMPTY);
}
