/**
 * Tests whether an HTML element is a link element
 * @param htmlElement HTML element
 * @returns true if the element is a link element
 */
export function isStyleLinkElement(htmlElement: HTMLElement): htmlElement is HTMLLinkElement {
  const rel = htmlElement.getAttribute('rel')?.toLocaleLowerCase();
  const href = htmlElement.getAttribute('href');
  return htmlElement.tagName === 'LINK' && rel === 'stylesheet' && href !== null;
}
