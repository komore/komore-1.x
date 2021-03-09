import type { Observable } from '@komore/reactive';

/**
 * Template processor
 */
export interface TemplateProcessor {
  /**
   * Processes a template
   * @param rootElement Root element
   * @returns TODO
   */
  (rootElement: HTMLElement): Observable<unknown>;
}
