import { defer, forkJoin, Observable } from 'rxjs';
import type { ParsedSource } from './parsed-source';
import { isEligibleScriptElement } from './script/is-script-element';
import { parseScriptElements } from './script/parse-script-elements';
import type { ScriptResourceLoader } from './script/script-resource-loader';
import { isEligibleStyleElement } from './style/is-eligible-style-element';
import { parseStyleElements } from './style/parse-style-elements';
import type { StyleResourceLoader } from './style/style-resource-loader';
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
      parsedTemplateElement: parseTemplateElements(remainingElements, scriptElements)
    });
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
