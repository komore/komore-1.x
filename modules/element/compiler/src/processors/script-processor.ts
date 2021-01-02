import type { Observable } from 'rxjs';

/**
 * Script processor
 */
export interface ScriptProcessor {
  /**
   * Processes a script
   * @param content Content
   * @returns TODO
   */
  (content: string): Observable<unknown>;
}
