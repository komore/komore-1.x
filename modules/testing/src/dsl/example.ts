import { type Observable } from '@komore/reactive';
//import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';

/**
 * Defines an example
 *
 * @param exampleTitle Example title
 * @param exampleBlock Example block
 */
export function example(exampleTitle: string, exampleBlock: () => void | Promise<void> | Observable<void>): void {
  return it(exampleTitle, exampleBlock as () => void);
  // TODO: post-jest throw new SpecificationNotPreprocessedError('example');
}
