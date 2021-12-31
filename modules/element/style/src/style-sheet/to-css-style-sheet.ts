import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Returns a function that builds a CSS style sheet from a set of CSS rules as text
 * @returns Function that builds a CSS style sheet from a set of CSS rules as text
 */
export function toCssStyleSheet(/* TODO: constructor parameters */): (text: string) => Observable<CSSStyleSheet> {
  return text => {
    const cssStyleSheet = new CSSStyleSheet(/* TODO: constructor parameters */);
    return deferPromise(() => cssStyleSheet.replace(text));
  };
}

// TODO: remove once available in typings
// WARN: not available in Firefox/Safari
declare global {
  interface CSSStyleSheet {
    replace(text: string): Promise<CSSStyleSheet>;
  }
}
