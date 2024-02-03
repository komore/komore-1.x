import { type ProcessorOptions } from './processor-options';

/**
 * Processor factory
 *
 * @template Options Processor options type
 * @template Processor Processor type
 */
export interface ProcessorFactory<Options extends ProcessorOptions, Processor> {
  /**
   * Media type regular expression
   */
  readonly mediaTypeRegExp?: RegExp;

  /**
   * Path regular expression
   */
  readonly pathRegExp?: RegExp;

  /**
   * Tests whether the factory is able to process a URL
   * @param url URL
   */
  canProcess?(url: URL): boolean | Observable<boolean>;

  /**
   * Creates a processor
   * @param options Options
   * @returns Processor
   */
  createProcessor(options: Options): Processor | Observable<Processor>;
}
