import { createCssProcessor } from '@komore/element-compiler/css';
import {
  type StyleProcessor,
  type StyleProcessorFactory,
  type StyleProcessorOptions,
} from '@komore/element-compiler/processor';
import { asObservable, defaultIfEmpty, forkJoin } from '@komore/reactive';

/**
 * Style processor factories
 */
const styleProcessorFactories: ReadonlyArray<StyleProcessorFactory<StyleProcessorOptions>> = [
  {
    mediaTypeRegExp: /^text\/css$/,
    pathRegExp: /\.css$/,
    canProcess: () => true,
    createProcessor: createCssProcessor,
  },
];

/**
 * Creates a style processor
 *
 * @param mediaType Media typpe
 * @param options Options
 * @returns Style processor
 */
function createStyleProcessor(mediaType: string, options: unknown): StyleProcessor {
  const styleProcessorFactory = styleProcessorFactories.find(({ regExp }) => regExp.test(mediaType));
  if (styleProcessorFactory === undefined) {
    throw new Error(`no style processor found for type '${mediaType}'`);
  }

  const { canProcess, createProcessor } = styleProcessorFactory;

  const canProcess$ = asObservable(canProcess());

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
  return forkJoin(jobs).pipe(defaultIfEmpty([]));
}
