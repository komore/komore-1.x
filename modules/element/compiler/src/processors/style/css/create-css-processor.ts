import { of } from 'rxjs';
import type { StyleProcessor } from '../style-processor';

/**
 * Creates a CSS style processor
 * @param options Options
 * @returns CSS style processor
 */
export function createCssProcessor(_: unknown): StyleProcessor {
  return content => {
    console.log('weee css', content);
    const x = new CSSStyleSheet();
    x.sou
    return of(undefined);
  };
}
