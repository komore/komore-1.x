/**
 * Tests whether an HTML element is an eligible script element
 * @param htmlElement Element
 * @returns true if the element is an eligible script element
 */
export function isEligibleScriptElement(htmlElement: HTMLElement): htmlElement is HTMLScriptElement {
  return htmlElement.tagName === 'SCRIPT';
}
