import { createCssProcessor } from './css/create-css-processor';
import { createScssProcessor } from './scss/create-scss-processor';
import type { StyleProcessorFactory } from './style-processor-factory';

/**
 * Style processor factories
 */
export const styleProcessorFactories: ReadonlyArray<StyleProcessorFactory> = [
  {
    regExp: /^text\/css$/,
    createProcessor: createCssProcessor
  },
  {
    regExp: /^text\/scss$/,
    createProcessor: createScssProcessor
  }
];
