import { type AwsApiShapeReference } from './aws-api-shape-reference';

/**
 * AWS API operation
 */
export interface AwsApiOperation {
  /**
   * Documentation
   */
  readonly documentation: string;
  /**
   * Errors
   */
  readonly errors: ReadonlyArray<AwsApiShapeReference>;
  /**
   * HTTP information
   */
  readonly http: {
    /**
     * HTTP method
     */
    readonly method: string;
    /**
     * Request URI
     */
    readonly requestUri: string;
  };
  /**
   * Input
   */
  readonly input: AwsApiShapeReference;
  /**
   * Operation name
   */
  readonly name: string;
  /**
   * Output
   */
  readonly output?: AwsApiShapeReference;
}
