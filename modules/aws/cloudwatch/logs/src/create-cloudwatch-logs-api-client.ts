import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type CloudWatchLogsApiClient } from './cloudwatch-logs-api-client';
import { type CloudWatchLogsApiClientOptions } from './cloudwatch-logs-api-client-options';

/**
 * Creates a CloudWatch Logs API client
 *
 * @param clientOptions CloudWatch Logs API client options
 * @returns CloudWatch Logs API client
 */
export function createCloudWatchLogsApiClient(clientOptions: CloudWatchLogsApiClientOptions): CloudWatchLogsApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'logs';
  const targetPrefix = 'Logs_20140328';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientJsonParametersStrategy({ targetPrefix }),
      result: [awsApiClientJsonResultStrategy({})],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientDefaultUrlStrategy(),
    },
  });
}
