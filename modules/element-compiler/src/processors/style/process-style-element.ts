import { type StyleProcessorOutput } from '@komore/element-compiler/processor';

import { createProcessor } from '../create-processor';
import { styleProcessorFactories } from './style-processor-factories';

/**
 * Processes a style element
 *
 * @param styleElement HTML style element
 * @returns Processed style element
 */
export function processStyleElement(styleElement: HTMLStyleElement): Observable<StyleProcessorOutput> {
  const type = styleElement.getAttribute('type') ?? 'text/css';
  // const media = styleElement.getAttribute('media') ?? 'all';
  const styleProcessor = createProcessor(styleProcessorFactories, type, {});
  return styleProcessor(styleElement.textContent ?? '');
}
