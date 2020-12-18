import { FunctionConfiguration, UpdateFunctionCodeRequest } from '@aws-sdk/client-lambda';
import { throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';
import { Command } from '@komore/dev-server-local-amazon/service';

/**
 * Updates a Lambda function's code
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html UpdateFunctionCode}
 */
export const updateFunctionCode: Command<UpdateFunctionCodeRequest, FunctionConfiguration> = throwUnimplementedCommand(
  'UpdateFunctionCode'
);
