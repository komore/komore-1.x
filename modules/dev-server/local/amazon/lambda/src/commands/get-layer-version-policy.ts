import { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a Lambda layer's permission policy
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html GetLayerVersionPolicy}
 */
export const getLayerVersionPolicy: Command<
  GetLayerVersionPolicyRequest,
  GetLayerVersionPolicyResponse
> = throwUnimplementedCommand('GetLayerVersionPolicy');
