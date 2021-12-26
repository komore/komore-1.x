import { isNotNull } from '@komore/functional';
import { defer, forkJoin, map, type Observable } from '@komore/reactive';
import { type ParsedSource } from './parsed-source';
import { isEligibleScriptElement } from './script/is-script-element';
import { parseScriptElements } from './script/parse-script-elements';
import { type ScriptResourceLoader } from './script/script-resource-loader';
import { isEligibleStyleElement } from './style/is-eligible-style-element';
import { parseStyleCustomPropertyDefinitions } from './style/parse-style-custom-property-definitions';
import { parseStyleElements } from './style/parse-style-elements';
import { type StyleResourceLoader } from './style/style-resource-loader';
import { parseTemplateElements } from './template/parse-template-elements';

declare global {
  // TODO: remove once type definitions are updated
  // cf. https://github.com/microsoft/TypeScript/blob/master/src/lib/dom.generated.d.ts
  interface NodeListOf<TNode extends Node> extends NodeList {
    values(): Iterable<TNode>;
  }
}

/**
 * Parses a source
 * @param documentFragment Document fragment
 * @param scriptResourceLoader Script resource loader
 * @param styleResourceLoader Style resource loader
 * @returns HTML element
 */
export function parseSource(
  documentFragment: DocumentFragment,
  scriptResourceLoader: ScriptResourceLoader,
  styleResourceLoader: StyleResourceLoader
): Observable<ParsedSource> {
  return defer(() => {
    const childNodes = Array.from(documentFragment.childNodes.values());
    const childElements = childNodes.filter(isHtmlElementNode);
    const scriptElements = childElements.filter(isEligibleScriptElement);
    const styleElements = childElements.filter(isEligibleStyleElement);
    const eligibleElements = [...scriptElements, ...styleElements] as ReadonlyArray<HTMLElement>;
    const remainingElements = childElements.filter(childElement => !eligibleElements.includes(childElement));
    return forkJoin({
      scriptElements: parseScriptElements(scriptElements, scriptResourceLoader),
      styleElements: parseStyleElements(styleElements, styleResourceLoader),
      parsedElementTemplate: parseTemplateElements(remainingElements, scriptElements)
    }).pipe(
      map(parsedSource => {
        const definedStyleSheets = filterDefinedStyleSheets(parsedSource.styleElements);
        return {
          ...parsedSource,
          parsedCustomPropertyDefinitions: parseStyleCustomPropertyDefinitions(definedStyleSheets)
        };
      })
    );
  });
}

/**
 * Tests whether a node is an element
 * @param node Node
 * @returns true if the node is an element
 */
function isHtmlElementNode(node: Node): node is HTMLElement {
  return node.nodeType === Node.ELEMENT_NODE;
}

/**
 * Filters defined style sheets
 * @param styleElements List of HTML style elements
 * @returns List of CSS style sheets
 */
function filterDefinedStyleSheets(styleElements: ReadonlyArray<HTMLStyleElement>): ReadonlyArray<CSSStyleSheet> {
  return styleElements.map(({ sheet }) => sheet).filter(isNotNull);
}
