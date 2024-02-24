import { type ReadonlyRecord } from '@komore/typescript';

import { type AwsApiMetadata } from './aws-api-metadata';
import { type AwsApiOperation } from './aws-api-operation';
import { type AwsApiShape } from './aws-api-shape';

/**
 * AWS API normal schema
 */
export interface AwsApiNormalSchema {
  readonly metadata: AwsApiMetadata;
  readonly operations: ReadonlyRecord<string, AwsApiOperation>;
  readonly shapes: ReadonlyRecord<string, AwsApiShape>;
  readonly version: '2.0';
}
