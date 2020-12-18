import { DeleteProvisionedConcurrencyConfigRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes the provisioned concurrency configuration for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html DeleteProvisionedConcurrencyConfig}
 */
export const deleteProvisionedConcurrencyConfig: Command<
  DeleteProvisionedConcurrencyConfigRequest,
  void
> = throwUnimplementedCommand('DeleteProvisionedConcurrencyConfig');
