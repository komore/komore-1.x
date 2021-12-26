import { defaultIfEmpty, forkJoin, type Observable } from '@komore/reactive';
import { loadStyleElement } from './load-style-element';
import { type StyleResourceLoader } from './style-resource-loader';

/**
 * Parses style or link elements, loading them from external sources if necessary
 * @param styleOrLinkElements HTML style or link elements
 * @param styleResourceLoader Style resource loader
 * @returns List of HTML style elements
 */
export function parseStyleElements(
  styleOrLinkElements: ReadonlyArray<HTMLStyleElement | HTMLLinkElement>,
  styleResourceLoader: StyleResourceLoader
): Observable<ReadonlyArray<HTMLStyleElement>> {
  const loadStyleElements = styleOrLinkElements.map(loadStyleElement(styleResourceLoader));
  return forkJoin(loadStyleElements).pipe(defaultIfEmpty([]));
}
