/**
 * Gets an element tag name from a template
 * @param templateElement Template element
 * @returns Element tag name
 */
export function getElementTagName(templateElement: HTMLElement): string {
  const tagName = templateElement.tagName;
  if (tagName.includes('-')) {
    return tagName.toLocaleLowerCase();
  }

  const asAttributeValue = templateElement.getAttribute('is');
  if (asAttributeValue === null) {
    throw new Error(`built-in ${tagName} element cannot be extended without specifying a custom element name`);
  }

  return asAttributeValue;
}
