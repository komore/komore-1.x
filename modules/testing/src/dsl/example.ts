import { SpecificationNotPreprocessedError } from '../error/specification-not-preprocessed-error';
import { type ExampleBlock } from './example-block';

/**
 * Defines an example
 *
 * @param exampleTitle Example title
 * @param exampleBlock Example block
 */
export function example(_exampleTitle: string, _exampleBlock: () => ExampleBlock): void {
  throw new SpecificationNotPreprocessedError('example');
}
