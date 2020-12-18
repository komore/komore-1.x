import { FunctionConfiguration, UpdateFunctionConfigurationRequest } from '@aws-sdk/client-lambda';
import { throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';
import { Command } from '@komore/dev-server-local-amazon/service';

/**
 * Updates a Lambda function's configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html UpdateFunctionConfiguration}
 */
export const updateFunctionConfiguration: Command<UpdateFunctionConfigurationRequest, FunctionConfiguration> = throwUnimplementedCommand(
  'UpdateFunctionConfiguration'
);
