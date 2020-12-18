import { ListProvisionedConcurrencyConfigsRequest, ListProvisionedConcurrencyConfigsResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a list of provisioned concurrency configurations for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html ListProvisionedConcurrencyConfigs}
 */
export const listProvisionedConcurrencyConfigs: Command<
  ListProvisionedConcurrencyConfigsRequest,
  ListProvisionedConcurrencyConfigsResponse
> = throwUnimplementedCommand('ListProvisionedConcurrencyConfigs');
