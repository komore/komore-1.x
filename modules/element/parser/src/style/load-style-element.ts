import type { UnaryFunction } from '@komore/functional';
import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';
import { isStyleElement } from './is-style-element';
import { loadStyleLinkElement } from './load-style-link-element';
import type { StyleResourceLoader } from './style-resource-loader';

/**
 * Loads a style or link element
 * @param styleResourceLoader Style resource loader
 * @returns HTML style element
 */
export function loadStyleElement(
  styleResourceLoader: StyleResourceLoader
): UnaryFunction<HTMLStyleElement | HTMLLinkElement, Observable<HTMLStyleElement>> {
  return (styleOrLinkElement: HTMLStyleElement | HTMLLinkElement) =>
    isStyleElement(styleOrLinkElement)
      ? of(styleOrLinkElement)
      : loadStyleLinkElement(styleOrLinkElement, styleResourceLoader);
}
