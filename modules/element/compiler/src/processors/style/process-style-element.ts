import type { Observable } from 'rxjs';
import { createProcessor } from '../create-processor';
import type { ProcessedStyleSheet } from './processed-style-sheet';
import { styleProcessorFactories } from './style-processor-factories';

/**
 * Processes a style element
 * @param styleElement HTML style element
 * @returns Processed style element
 */
export function processStyleElement(styleElement: HTMLStyleElement): Observable<ProcessedStyleSheet> {
  const type = styleElement.getAttribute('type') ?? 'text/css';
  // const media = styleElement.getAttribute('media') ?? 'all';
  const styleProcessor = createProcessor(styleProcessorFactories, type, {});
  return styleProcessor(styleElement);
}
