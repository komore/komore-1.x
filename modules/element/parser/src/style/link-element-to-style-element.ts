import { type Observable, throwError } from '@komore/reactive';
import { type StyleResourceLoader } from './style-resource-loader';

/**
 * Returns a function that loads a style element from a link element
 * @param styleResourceLoader Style resource loader
 * @returns Function that loads a style element from a link element
 */
export function linkElementToStyleElement(
  styleResourceLoader: StyleResourceLoader
): (linkElement: HTMLLinkElement) => Observable<HTMLStyleElement> {
  return linkElement => {
    const resourceUrl = linkElement.getAttribute('href');
    if (resourceUrl === null) {
      return throwError(() => new Error('loading style from a link element requires an href attribute'));
    }

    return styleResourceLoader(resourceUrl);
  };
}
