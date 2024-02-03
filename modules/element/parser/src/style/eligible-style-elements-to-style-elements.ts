import { defaultIfEmpty, forkJoin } from '@komore/reactive';

import { type EligibleStyleElement } from './eligible-style-element';
import { eligibleStyleElementToStyleElement } from './eligible-style-element-to-style-element';
import { type StyleResourceLoader } from './style-resource-loader';

/**
 * Creates a function that turns a list of eligible style elements into style elements
 * @param styleResourceLoader Style resource loader
 * @returns Function that turns a list of eligible style elements into style elements
 */
export function eligibleStyleElementsToStyleElements(
  styleResourceLoader: StyleResourceLoader
): (eligibleStyleElements: ReadonlyArray<EligibleStyleElement>) => Observable<ReadonlyArray<HTMLStyleElement>> {
  const toStyleElement = eligibleStyleElementToStyleElement(styleResourceLoader);
  return eligibleStyleElements => forkJoin(eligibleStyleElements.map(toStyleElement)).pipe(defaultIfEmpty([]));
}
