import type { ProcessedStyleSheet, StyleProcessor } from '@komore/element/compiler/processor';
import type { ScssProcessorOptions } from './scss-processor-options';
import { map, mergeMap } from 'rxjs';
import { toProcessedScss } from './to-processed-scss';

/**
 * Creates an SCSS processor
 * @param options Options
 * @returns SCSS processor
 */
export function createScssProcessor(options: ScssProcessorOptions): StyleProcessor {
  return content => content.pipe(
    mergeMap(toProcessedScss(options)),
    map(toProcessedScssStyleSheet)
  );
}
