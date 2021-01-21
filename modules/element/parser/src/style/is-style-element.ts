/**
 * Tests whether an HTML element is a style element
 * @param htmlElement HTML element
 * @returns true if the element is a style element
 */
export function isStyleElement(htmlElement: HTMLElement): htmlElement is HTMLStyleElement {
  return htmlElement.tagName === 'STYLE';
}
