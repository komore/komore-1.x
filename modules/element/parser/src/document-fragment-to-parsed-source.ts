import { isNotNull } from '@komore/functional';
import { defer, forkJoin, map, type Observable } from '@komore/reactive';
import { type ParsedSource } from './parsed-source';
import { isEligibleScriptElement } from './script/is-script-element';
import { parseScriptElements } from './script/parse-script-elements';
import { type ScriptResourceLoader } from './script/script-resource-loader';
import { cssStyleSheetToPropertyDefinitions } from './style/custom-property/css-style-sheet-to-property-definitions';
import { eligibleStyleElementsToStyleElements } from './style/eligible-style-elements-to-style-elements';
import { isEligibleStyleElement } from './style/is-eligible-style-element';
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
 * Creates a function that returns a parsed source from a document fragment
 * @param documentFragment Document fragment
 * @param scriptResourceLoader Script resource loader
 * @param styleResourceLoader Style resource loader
 * @returns HTML element
 */
export function documentFragmentToParsedSource(
  scriptResourceLoader: ScriptResourceLoader,
  styleResourceLoader: StyleResourceLoader
): (documentFragment: DocumentFragment) => Observable<ParsedSource> {
  const toStyleElements = eligibleStyleElementsToStyleElements(styleResourceLoader);
  return documentFragment =>
    defer(() => {
      const childNodes = Array.from(documentFragment.childNodes.values());
      const childElements = childNodes.filter(isHtmlElementNode);
      const scriptElements = childElements.filter(isEligibleScriptElement);
      const eligibleStyleElements = childElements.filter(isEligibleStyleElement);
      const eligibleElements = [...scriptElements, ...eligibleStyleElements] as ReadonlyArray<HTMLElement>;
      const remainingElements = childElements.filter(childElement => !eligibleElements.includes(childElement));
      return forkJoin({
        scriptElements: parseScriptElements(scriptElements, scriptResourceLoader),
        styleElements: toStyleElements(eligibleStyleElements),
        parsedElementTemplate: parseTemplateElements(remainingElements, scriptElements)
      }).pipe(
        map(parsedSource => {
          const definedStyleSheets = filterDefinedStyleSheets(parsedSource.styleElements);
          const parsedCustomPropertyDefinitions = definedStyleSheets.flatMap(cssStyleSheetToPropertyDefinitions);
          return {
            ...parsedSource,
            parsedCustomPropertyDefinitions
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
