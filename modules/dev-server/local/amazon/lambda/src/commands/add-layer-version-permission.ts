import { AddLayerVersionPermissionRequest, AddLayerVersionPermissionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Adds permissions to a layer version
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html AddLayerVersionPermission}
 */
export const addLayerVersionPermission: Command<
  AddLayerVersionPermissionRequest,
  AddLayerVersionPermissionResponse
> = throwUnimplementedCommand('AddLayerVersionPermission');
