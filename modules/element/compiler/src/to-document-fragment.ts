import { JSDOM } from 'jsdom';

/**
 * Builds a document fragment from a source
 * @param source Source
 * @returns Document fragment
 */
export function toDocumentFragment(source: string): DocumentFragment {
  return JSDOM.fragment(source);
}
