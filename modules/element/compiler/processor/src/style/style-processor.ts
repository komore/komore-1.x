import { type Observable } from '@komore/reactive';
import { type ProcessedStyleSheet } from './processed-style-sheet';

/**
 * Style processor
 */
export interface StyleProcessor {
  /**
   * Processes style content
   * @param content Content
   * @returns Processed style sheet
   */
  (content: Observable<string>): Observable<ProcessedStyleSheet>;
}
