import { type ReadonlyRecord } from '@komore/typescript';

import { type AwsApiPaginatorProperties } from './aws-api-paginator-properties';

/**
 * AWS API paginators schema
 */
export interface AwsApiPaginatorsSchema {
  /**
   * Paginator properties by operation
   */
  readonly pagination: ReadonlyRecord<string, AwsApiPaginatorProperties>;
}
