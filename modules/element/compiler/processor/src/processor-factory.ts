import type { Observable } from '@komore/reactive';
import type { ProcessorOptions } from './processor-options';

/**
 * Processor factory
 * @template Options Processor options type
 * @template Processor Processor type
 */
export interface ProcessorFactory<Options extends ProcessorOptions, Processor> {
  readonly regExp?: RegExp;

  /**
   * Tests whether the factory is able to process a URL
   * @param url URL
   */
  canProcess?(url: URL): Observable<boolean>;

  /**
   * Creates a processor
   * @param options Options
   * @returns Processor
   */
  createProcessor(options: Options): Observable<Processor>;
}
