import { createHtmlProcessor } from './html/create-html-processor';
import type { TemplateProcessor } from './template-processor';
import type { TemplateProcessorFactory } from './template-processor-factory';

/**
 * Template processor factories
 */
export const templateProcessorFactories: ReadonlyArray<TemplateProcessorFactory<Record<string, unknown>, TemplateProcessor> = [
  {
    regExp: /^text\/html$/,
    createProcessor: createHtmlProcessor
  },
  {
    regExp: /^text\/markdown$/,
    createProcessor: createMarkdownProcessor
  }
];
