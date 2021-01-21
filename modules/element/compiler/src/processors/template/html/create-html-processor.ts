import { of } from 'rxjs';
import type { TemplateProcessor } from '../template-processor';

/**
 * Creates an HTML template processor
 * @param options Options
 * @returns HTML template processor
 */
export function createHtmlProcessor(_options: unknown): TemplateProcessor {
  return _rootElement => {
    return of(undefined);
  };
}
