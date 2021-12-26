import { type StyleProcessor } from '@komore/element/compiler/processor';
import { map, mergeMap } from '@komore/reactive';
import { type ScssProcessorOptions } from './scss-processor-options';
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
