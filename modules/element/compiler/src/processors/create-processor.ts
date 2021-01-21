import type { ProcessorFactory } from './processor-factory';

/**
 * Creates a processor
 * @param processorFactories Processor factories
 * @param type Type
 * @param options Options
 * @returns Processor
 * @template Options Options type
 * @template Processor Processor type
 */
export function createProcessor<Options, Processor>(
  processorFactories: ReadonlyArray<ProcessorFactory<Options, Processor>>,
  type: string,
  options: Options
): Processor {
  const processorFactory = processorFactories.find(({ regExp }) => regExp.test(type));
  if (processorFactory === undefined) {
    const availableTypes = processorFactories.map(({ regExp }) => regExp.toString()).join(', ');
    throw new Error(`no processor found for type "${type}" (available: ${availableTypes})`);
  }

  return processorFactory.createProcessor(options);
}
