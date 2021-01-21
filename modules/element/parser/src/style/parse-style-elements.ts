import type { Observable } from 'rxjs';
import { forkJoin, of, throwError } from 'rxjs';
import { isStyleElement } from './is-style-element';
import type { StyleResourceLoader } from './style-resource-loader';

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
  // TODO: remove block once https://github.com/ReactiveX/rxjs/pull/5922 is merged
  if (loadStyleElements.length === 0) {
    return of([]);
  }
  return forkJoin(loadStyleElements);
}

/**
 * Loads a style or link element
 * @param styleResourceLoader Style resource loader
 */
function loadStyleElement(styleResourceLoader: StyleResourceLoader) {
  return (styleOrLinkElement: HTMLStyleElement | HTMLLinkElement) =>
    isStyleElement(styleOrLinkElement)
      ? of(styleOrLinkElement)
      : loadStyleLinkElement(styleOrLinkElement, styleResourceLoader);
}

/**
 * Loads a style link element
 * @param linkElement HTML link element
 * @param styleResourceLoader Style resource loader
 * @returns HTML style element
 */
function loadStyleLinkElement(
  linkElement: HTMLLinkElement,
  styleResourceLoader: StyleResourceLoader
): Observable<HTMLStyleElement> {
  const resourceUrl = linkElement.getAttribute('href');
  return resourceUrl !== null
    ? styleResourceLoader(resourceUrl)
    : throwError(() => new Error('loading style from a link element requires an href attribute'));
}
