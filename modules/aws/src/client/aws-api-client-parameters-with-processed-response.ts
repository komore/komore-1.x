import { type HttpHeaderName } from '@komore/http';
import { type ReadonlyRecord } from '@komore/typescript';

import { type AwsApiClientBaseParameters } from './aws-api-client-base-parameters';

/**
 * AWS API client parameters with processed response
 */
export interface AwsApiClientParametersWithProcessedResponse<T = unknown> extends AwsApiClientBaseParameters {
  /**
   * Response headers mapping
   */
  readonly mapResponseHeaders?: ReadonlyRecord<
    HttpHeaderName,
    keyof T | ((value: string | undefined) => readonly [propertyKey: keyof T, propertyValue: T[keyof T]])
  >;
}
