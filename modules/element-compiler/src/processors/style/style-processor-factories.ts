import { type StyleProcessorFactory, type StyleProcessorOptions } from '@komore/element/compiler/processor';
import { createCssProcessor } from '@komore/element/compiler/css';
import { createScssProcessor } from '@komore/element/compiler/scss';

/**
 * Style processor factories
 */
export const styleProcessorFactories: ReadonlyArray<StyleProcessorFactory<StyleProcessorOptions>> = [
  {
    regExp: /^text\/css$/,
    createProcessor: createCssProcessor
  },
  {
    regExp: /^text\/scss$/,
    createProcessor: createScssProcessor
  }
];
