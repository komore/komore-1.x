import type { TemplateProcessor } from '@komore/element/compiler';
import { of } from '@komore/reactive';

export function createMarkdownProcessor(_: unknown): TemplateProcessor {
  return rootElement => {
    console.log('markdown', rootElement.innerText);
    return of(undefined);
  };
}
