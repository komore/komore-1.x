import type { TemplateProcessor } from '@komore/element/compiler';
import { of } from '@komore/reactive';
import marked from 'marked';

export function createMarkdownProcessor(_: unknown): TemplateProcessor {
  return rootElement => {
    console.log('markdown', rootElement.innerText);
    marked()
    return of(undefined);
  };
}
