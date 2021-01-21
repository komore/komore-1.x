import type { Observable } from 'rxjs';
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
