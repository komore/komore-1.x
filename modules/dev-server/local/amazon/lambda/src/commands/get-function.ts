import { GetFunctionRequest, GetFunctionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves information about a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html GetFunction}
 */
export const getFunction: Command<GetFunctionRequest, GetFunctionResponse> = throwUnimplementedCommand('GetFunction');
