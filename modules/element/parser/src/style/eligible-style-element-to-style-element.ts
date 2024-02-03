import { of } from '@komore/reactive';

import { type EligibleStyleElement } from './eligible-style-element';
import { isStyleElement } from './is-style-element';
import { linkElementToStyleElement } from './link-element-to-style-element';
import { type StyleResourceLoader } from './style-resource-loader';

/**
 * Loads a style or link element
 *
 * @param styleResourceLoader Style resource loader
 * @returns HTML style element
 */
export function eligibleStyleElementToStyleElement(
  styleResourceLoader: StyleResourceLoader
): (eligibleStyleElement: EligibleStyleElement) => Observable<HTMLStyleElement> {
  const toStyleElement = linkElementToStyleElement(styleResourceLoader);
  return eligibleStyleElement =>
    isStyleElement(eligibleStyleElement) ? of(eligibleStyleElement) : toStyleElement(eligibleStyleElement);
}
