import type { HTMLElement, Node } from 'node-html-parser';
import { NodeType } from 'node-html-parser';
import { generateScript } from './generate-script';
import { generateStyle } from './generate-style';
import { generateTemplate } from './generate-template';
import { parseSource } from './parse-source';

/**
 * Compiles an element source
 *
 * An element source is split into three categories:
 * - &lt;script> elements are processed as scripts
 * - &lt;style> and &lt;link> elements are processed as styles
 * - any remaining element node is processed as a template
 *
 * @param source Source
 */
export function compileSource(source: string): void {
  const sourceElement = parseSource(source);
  const childElements = sourceElement.childNodes.filter(filterHtmlElements);
  const scriptElements = childElements.filter(({ tagName }) => tagName === 'SCRIPT');
  const styleElements = childElements.filter(({ tagName }) => tagName === 'STYLE' || tagName === 'LINK');
  const templateElements = childElements.filter(
    childElement => !scriptElements.includes(childElement) && !styleElements.includes(childElement)
  );

  if (templateElements.length !== 1) {
    const templateElementTagNames = templateElements.map(({ tagName }) => tagName.toLocaleLowerCase()).join(', ');
    throw new Error(`an element's template must be exactly one root element (found: ${templateElementTagNames})`);
  }

  const templateElement = templateElements[0];

  generateScript(scriptElements);
  generateStyle(styleElements);
  generateTemplate(templateElement);
}

/**
 * Filters nodes that are HTML elements
 * @param node Node
 * @returns true if the node is an HTML element
 */
function filterHtmlElements(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}
