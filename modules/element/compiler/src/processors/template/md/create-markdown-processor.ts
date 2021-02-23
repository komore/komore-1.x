import { of } from '@komore/reactive';
import type { TemplateProcessor } from '../template-processor';

export function createMarkdownProcessor(_: unknown): TemplateProcessor {
  return rootElement => {
    console.log('markdown', rootElement.innerText);
    return of(undefined);
  };
}
