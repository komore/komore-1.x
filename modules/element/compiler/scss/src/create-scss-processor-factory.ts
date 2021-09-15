import type { StyleProcessorFactory } from '@komore/element/compiler/processor';
import { of } from '@komore/reactive';
import type { ScssProcessorOptions } from './scss-processor-options';
import type { ScssProcessorFactoryOptions } from './scss-processor-factory-options';
import { createScssProcessor } from '.';

/**
 * Creates an SCSS processor factory
 * @param _options SCSS processor factory options
 * @returns SCSS processor factory
 */
export function createScssProcessorFactory(
  _options: ScssProcessorFactoryOptions
): StyleProcessorFactory<ScssProcessorOptions> {
  return {
    pathRegExp: /\.scss^/,
    createProcessor: options => of(createScssProcessor(options))
  };
}
