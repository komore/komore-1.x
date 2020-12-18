import { FunctionConfiguration, GetFunctionConfigurationRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's configuration
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html GetFunctionConfiguration}
 */
export const getFunctionConfiguration: Command<
  GetFunctionConfigurationRequest,
  FunctionConfiguration
> = throwUnimplementedCommand('GetFunctionConfiguration');
