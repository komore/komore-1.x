import { of } from '@komore/reactive';
import type { ProcessedStyleSheet } from '../processed-style-sheet';
import type { StyleProcessor } from '../style-processor';

/**
 * Creates a CSS style processor
 * @param options Options
 * @returns CSS style processor
 */
export function createCssProcessor(_: unknown): StyleProcessor {
  return content => {
    console.log('weee css', content);
    const cssStyleSheet = new CSSStyleSheet();
    const processedStyleSheet: ProcessedStyleSheet = {
      properties: [],
      referencedProperties: new Set(),
      cssStyleSheet
    };
    return of(processedStyleSheet);
  };
}
