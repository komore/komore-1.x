import { GetPolicyRequest, GetPolicyResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda function's policy
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html GetPolicy}
 */
export const getPolicy: Command<GetPolicyRequest, GetPolicyResponse> = throwUnimplementedCommand('GetPolicy');
