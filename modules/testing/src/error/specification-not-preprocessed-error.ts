/**
 * Specification not preprocessed error
 */
export class SpecificationNotPreprocessedError extends Error {
  readonly name = 'SpecificationNotPreprocessedError';
  readonly functionName: string;

  /**
   * Class constructor
   *
   * @param functionName Function name
   */
  constructor(functionName: string) {
    super(`function ${functionName} was called without preprocessing the specification source file`);
    this.functionName = functionName;
  }
}
