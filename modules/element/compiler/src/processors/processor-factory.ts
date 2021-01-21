/**
 * Processor factory
 * @template Options Options type
 * @template Processor Processor type
 */
export interface ProcessorFactory<Options, Processor> {
  readonly regExp: RegExp;

  /**
   * Creates a processor
   * @param options Options
   * @returns Processor
   */
  createProcessor(options: Options): Processor;
}
