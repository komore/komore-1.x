import type { HTMLElement } from 'node-html-parser';

/**
 * Gets an element tag name from a template
 * @param templateElement Template element
 * @returns Element tag name
 */
export function getElementTagName(templateElement: HTMLElement): string {
  const tagName = templateElement.rawTagName;
  if (tagName.includes('-')) {
    return tagName;
  }

  const asAttributeValue = templateElement.getAttribute('as');
  if (asAttributeValue === undefined) {
    throw new Error(`built-in ${tagName} element cannot be extended without specifying a custom element name`);
  }

  return asAttributeValue;
}
