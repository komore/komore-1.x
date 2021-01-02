import type { HTMLElement } from 'node-html-parser';
import type { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import type { StyleProcessor } from './processors/style-processor';
import { createCssProcessor } from './processors/css/create-css-processor';
import { createScssProcessor } from './processors/scss/create-scss-processor';

/**
 * Style processor factory
 */
interface StyleProcessorFactory {
  readonly regExp: RegExp;
  readonly factory: (options: unknown) => StyleProcessor;
}

/**
 * Style processor factories
 */
const styleProcessorFactories: ReadonlyArray<StyleProcessorFactory> = [
  {
    regExp: /^text\/css$/,
    factory: createCssProcessor
  },
  {
    regExp: /^text\/scss$/,
    factory: createScssProcessor
  }
];

/**
 * Creates a style processor
 * @param type Type
 * @param options Options
 * @returns Style processor
 */
function createStyleProcessor(type: string, options: unknown): StyleProcessor {
  const styleProcessorFactory = styleProcessorFactories.find(({ regExp }) => regExp.test(type));
  if (styleProcessorFactory === undefined) {
    throw new Error(`no style processor found for type '${type}'`);
  }

  return styleProcessorFactory.factory(options);
}

/**
 * Processes a style element
 * @param styleElement Style element
 * @returns Processed style element
 */
function processStyleElement(styleElement: HTMLElement): Observable<unknown> {
  const type = styleElement.getAttribute('type') ?? 'text/css';
  const content = styleElement.innerText;
  // const media = styleElement.getAttribute('media') ?? 'all';
  const styleProcessor = createStyleProcessor(type, {});
  return styleProcessor(content);
}

/**
 * Generates style information for an element
 * @param styleElements Style elements
 */
export function generateStyle(styleElements: ReadonlyArray<HTMLElement>): Observable<unknown> {
  const jobs = styleElements.map(processStyleElement);
  return forkJoin(jobs);
}
