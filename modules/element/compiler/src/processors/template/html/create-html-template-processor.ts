import { of } from '@komore/reactive';
import type { HtmlTemplateProcessor } from './html-template-processor';

/**
 * Creates an HTML template processor
 * @param options Options
 * @returns HTML template processor
 */
export function createHtmlTemplateProcessor(_options: unknown): HtmlTemplateProcessor {
  return _rootElement => {
    return of(undefined);
  };
}
