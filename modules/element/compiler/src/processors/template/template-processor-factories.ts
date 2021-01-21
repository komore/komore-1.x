import { createHtmlProcessor } from './html/create-html-processor';
import { createMarkdownProcessor } from './md/create-markdown-processor';
import type { TemplateProcessorFactory } from './template-processor-factory';

/**
 * Template processor factories
 */
export const templateProcessorFactories: ReadonlyArray<TemplateProcessorFactory> = [
  {
    regExp: /^text\/html$/,
    createProcessor: createHtmlProcessor
  },
  {
    regExp: /^text\/markdown$/,
    createProcessor: createMarkdownProcessor
  }
];
