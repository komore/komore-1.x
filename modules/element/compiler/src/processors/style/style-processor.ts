import type { Observable } from '@komore/reactive';
import { ProcessedStyleSheet } from './processed-style-sheet';

/**
 * Style processor
 */
export interface StyleProcessor {
  /**
   * Processes style content
   * @param styleElement HTML style element
   * @returns Result
   */
  (styleElement: HTMLStyleElement): Observable<ProcessedStyleSheet>;
}
