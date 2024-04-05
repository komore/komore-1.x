import { type HttpMethod } from '@komore/http';

/**
 * AS API client parameters strategy parameters
 */
export interface AwsApiClientParametersStrategyParameters {
  /**
   * Method
   */
  readonly method: HttpMethod;
  /**
   * Operation
   */
  readonly operation: string;
  /**
   * Parameters
   */
  readonly parameters?: unknown;
}
