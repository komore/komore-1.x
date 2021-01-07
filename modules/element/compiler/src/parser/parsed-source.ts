import type { HTMLElement } from 'node-html-parser';

/**
 * Parsed source
 */
export interface ParsedSource {
  readonly scriptElements: ReadonlyArray<HTMLElement>;
  readonly styleElements: ReadonlyArray<HTMLElement>;
  readonly templateElement: HTMLElement;
}
