import { type HttpClient } from '@komore/http/client';

/**
 * AWS API normal schema extractor options
 */
export interface AwsApiNormalSchemaExtractorOptions {
  /**
   * Endpoint URL
   *
   * @note Defaults to `https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/`
   */
  readonly endpointUrl?: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
}
