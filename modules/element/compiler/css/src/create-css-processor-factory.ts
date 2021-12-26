import { type StyleProcessorFactory } from '@komore/element/compiler/processor';
import { createCssProcessor } from './create-css-processor';
import { type CssProcessorOptions } from './css-processor-options';
import { type CssProcessorFactoryOptions } from './css-processor-factory-options';

/**
 * Creates a CSS processor factory
 */
export function createCssProcessorFactory(
  options: CssProcessorFactoryOptions
): StyleProcessorFactory<CssProcessorOptions> {
  return {
    mediaTypeRegExp: /^text\/css$/,
    pathRegExp: /\.css$/,
    createProcessor: createCssProcessor
  };
}
