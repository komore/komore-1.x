import { of } from 'rxjs';
import type { TemplateProcessor } from '../template-processor';

/**
 * Creates an HTML template processor
 * @param options Options
 */
export function createHtmlProcessor(options: unknown): TemplateProcessor {
  return contentNodes => {
    return of(undefined);
  };
}
