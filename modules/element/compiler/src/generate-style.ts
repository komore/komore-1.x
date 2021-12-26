import { createCssProcessor } from '@komore/element/compiler/css';
import { type StyleProcessor, type StyleProcessorFactory } from '@komore/element/compiler/processor';
import { createScssProcessor } from '@komore/element/compiler/scss';
import { defaultIfEmpty, forkJoin, type Observable } from '@komore/reactive';

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
function processStyleElement(styleElement: HTMLStyleElement): Observable<unknown> {
  const type = styleElement.getAttribute('type') ?? 'text/css';
  // const media = styleElement.getAttribute('media') ?? 'all';
  const styleProcessor = createStyleProcessor(type, {});
  return styleProcessor(styleElement);
}

/**
 * Generates style information for an element
 * @param styleElements Style elements
 */
export function generateStyle(styleElements: ReadonlyArray<HTMLStyleElement>): Observable<unknown> {
  const jobs = styleElements.map(processStyleElement);
  return forkJoin(jobs).pipe(
    defaultIfEmpty([])
  );
}
