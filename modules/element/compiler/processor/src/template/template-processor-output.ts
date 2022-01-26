import { type ProcessorOutput } from '../processor-output';

/**
 * Template processor output
 */
export interface TemplateProcessorOutput extends ProcessorOutput {
  readonly htmlElement: HTMLElement;
}
