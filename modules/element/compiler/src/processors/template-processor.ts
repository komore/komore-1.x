import { Observable } from 'rxjs';

/**
 * Template processor
 */
export interface TemplateProcessor {
  /**
   * Processes a template
   * @param contentNodes Content nodes
   * @returns TODO
   */
  (contentNodes: ReadonlyArray<Node>): Observable<unknown>;
}
