import { type ReadonlyRecord } from '@komore/typescript';

import { type AwsApiMetadata } from './aws-api-metadata';
import { type AwsApiOperation } from './aws-api-operation';
import { type AwsApiShape } from './aws-api-shape';

/**
 * AWS API normal schema
 */
export interface AwsApiNormalSchema {
  /**
   * HTML documentation
   */
  readonly documentation: string;
  /**
   * API metadata
   */
  readonly metadata: AwsApiMetadata;
  /**
   * Operations
   */
  readonly operations: ReadonlyRecord<string, AwsApiOperation>;
  /**
   * Shapes
   */
  readonly shapes: ReadonlyRecord<string, AwsApiShape>;
  /**
   * Schema version
   */
  readonly version: '2.0';
}
