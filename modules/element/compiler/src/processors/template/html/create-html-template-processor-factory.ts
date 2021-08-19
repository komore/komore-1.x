import type { TemplateProcessorFactory } from '../template-processor-factory';
import type { HtmlTemplateProcessor } from './html-template-processor';
import type { HtmlTemplateProcessorFactoryOptions } from './html-template-processor-factory-options';

export function createHtmlProcessorFactory(
  options: HtmlTemplateProcessorFactoryOptions
): TemplateProcessorFactory<HtmlTemplateProcessorFactoryOptions, HtmlTemplateProcessor>;
