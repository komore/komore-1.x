import {
  GetProvisionedConcurrencyConfigRequest,
  GetProvisionedConcurrencyConfigResponse
} from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's provisioned concurrency configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html GetProvisionedConcurrencyConfig}
 */
export const getProvisionedConcurrencyConfig: Command<
  GetProvisionedConcurrencyConfigRequest,
  GetProvisionedConcurrencyConfigResponse
> = throwUnimplementedCommand('GetProvisionedConcurrencyConfig');
