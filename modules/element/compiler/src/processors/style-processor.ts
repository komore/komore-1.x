import type { Observable } from 'rxjs';

/**
 * Style processor
 */
export interface StyleProcessor {
  /**
   * Processes style content
   * @param content Content
   * @returns Result
   */
  (content: string): Observable<unknown>;
}
