import { type ProcessorFactory } from '@komore/element/compiler/processor';
import { isDefined } from '@komore/functional';
import { type Observable } from '@komore/reactive';

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
): Observable<Processor> {
  const processorFactory = processorFactories.find(({ pathRegExp }) => pathRegExp?.test(type));
  if (processorFactory === undefined) {
    const availableTypes = processorFactories.map(({ pathRegExp }) => pathRegExp?.toString()).filter(isDefined).join(', ');
    throw new Error(`no processor found for type "${type}" (available: ${availableTypes})`);
  }

  return processorFactory.createProcessor(options);
}
