import type { HTMLElement, Node } from 'node-html-parser';
import { NodeType, parse } from 'node-html-parser';
import type { ParsedSource } from './parsed-source';

/**
 * Parses a source
 * @param source Source
 * @returns HTML element
 */
export function parseSource(source: string): ParsedSource {
  const sourceElement = parse(source, {
    lowerCaseTagName: false,
    comment: false,
    blockTextElements: {
      script: true,
      style: true
    }
  });
  const childElements = sourceElement.childNodes.filter(filterHtmlElements);
  const scriptElements = childElements.filter(({ tagName }) => tagName === 'SCRIPT');
  const styleElements = childElements.filter(({ tagName }) => tagName === 'STYLE' || tagName === 'LINK');
  const templateElements = childElements.filter(
    childElement => !scriptElements.includes(childElement) && !styleElements.includes(childElement)
  );

  if (templateElements.length === 0) {
    throw new Error('an element template must have a root element');
  }

  if (templateElements.length > 1) {
    const templateElementTagNames = templateElements.map(({ tagName }) => tagName.toLocaleLowerCase()).join(', ');
    throw new Error(`an element template cannot have more than one root element (found: ${templateElementTagNames})`);
  }

  const templateElement = templateElements[0];

  return {
    scriptElements,
    styleElements,
    templateElement
  };
}

/**
 * Filters nodes that are HTML elements
 * @param node Node
 * @returns true if the node is an HTML element
 */
function filterHtmlElements(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}
