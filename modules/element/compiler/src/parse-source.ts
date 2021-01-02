import type { HTMLElement } from 'node-html-parser';
import { parse } from 'node-html-parser';

/**
 * Parses a source
 * @param source Source
 * @returns HTML element
 */
export function parseSource(source: string): HTMLElement {
  return parse(source, {
    lowerCaseTagName: false,
    comment: false,
    blockTextElements: {
      script: true,
      style: true
    }
  });
}
