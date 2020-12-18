import {
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse
} from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Adds a provisioned concurrency configuration to a Lambda function's alias or version
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html PutProvisionedConcurrencyConfig}
 */
export const putProvisionedConcurrencyConfig: Command<
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse
> = throwUnimplementedCommand('PutProvisionedConcurrencyConfig');
