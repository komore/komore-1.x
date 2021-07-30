import { of } from '@komore/reactive';
import type { ProcessedStyleSheet, StyleProcessor } from '@komore/element/processor';

/**
 * Creates an SCSS processor
 * @param options Options
 */
export function createScssProcessor(_: unknown): StyleProcessor {
  return content => {
    console.log('scss', content);
    return of(undefined as unknown as ProcessedStyleSheet);
  };
}
