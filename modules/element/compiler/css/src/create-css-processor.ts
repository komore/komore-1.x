import { of } from '@komore/reactive';
import type { ProcessedStyleSheet, StyleProcessor } from '@komore/element/compiler';

/**
 * Creates a CSS style processor
 * @param options Options
 * @returns CSS style processor
 */
export function createCssProcessor(_: unknown): StyleProcessor {
  return content => {
    console.log('weee css', content);
    const cssStyleSheet = new CSSStyleSheet();
    cssStyleSheet.
    const processedStyleSheet: ProcessedStyleSheet = {
      propertyDefinitions: [],
      referencedProperties: new Set(),
      cssStyleSheet
    };
    return of(processedStyleSheet);
  };
}
