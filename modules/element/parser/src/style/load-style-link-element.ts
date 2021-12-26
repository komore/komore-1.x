import { type Observable, throwError } from '@komore/reactive';
import { type StyleResourceLoader } from './style-resource-loader';

/**
 * Loads a style link element
 * @param linkElement HTML link element
 * @param styleResourceLoader Style resource loader
 * @returns HTML style element
 */
export function loadStyleLinkElement(
  linkElement: HTMLLinkElement,
  styleResourceLoader: StyleResourceLoader
): Observable<HTMLStyleElement> {
  const resourceUrl = linkElement.getAttribute('href');
  return resourceUrl !== null
    ? styleResourceLoader(resourceUrl)
    : throwError(() => new Error('loading style from a link element requires an href attribute'));
}
