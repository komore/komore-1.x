import { of } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { ProcessedStyleSheet, StyleProcessor } from '@komore/element/compiler/processor';

/**
 * Creates a CSS style processor
 * @param options Options
 * @returns CSS style processor
 */
export function createCssProcessor(_: unknown): StyleProcessor {
  return content => content.pipe(
    tapValue(content => console.log('wee css', content)),

    const cssStyleSheet = new CSSStyleSheet();
    cssStyleSheet.
    const processedStyleSheet: ProcessedStyleSheet = {
      propertyDefinitions: [],
      referencedProperties: new Set(),
      cssStyleSheet
    };
    return of(processedStyleSheet);
  );
}
