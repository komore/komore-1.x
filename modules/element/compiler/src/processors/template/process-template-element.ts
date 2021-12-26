import { type Observable } from '@komore/reactive';
import { createProcessor } from '../create-processor';
import { templateProcessorFactories } from './template-processor-factories';

/**
 * Processes a template element
 * @param htmlElement HTML element
 * @returns Processed template element
 */
export function processTemplateElement(htmlElement: HTMLElement): Observable<unknown> {
  const type = htmlElement.getAttribute('k-template-type') ?? 'html';
  const templateProcessor = createProcessor(templateProcessorFactories, type, {});
  return templateProcessor(htmlElement);
}
