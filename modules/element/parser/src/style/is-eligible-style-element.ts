import { type EligibleStyleElement } from './eligible-style-element';
import { isStyleElement } from './is-style-element';
import { isStyleLinkElement } from './is-style-link-element';

/**
 * Tests whether an HTML element is an eligible style element
 * @param htmlElement HTML element
 * @returns true if the element is an eligible style element
 */
export function isEligibleStyleElement(htmlElement: HTMLElement): htmlElement is EligibleStyleElement {
  return isStyleElement(htmlElement) || isStyleLinkElement(htmlElement);
}
