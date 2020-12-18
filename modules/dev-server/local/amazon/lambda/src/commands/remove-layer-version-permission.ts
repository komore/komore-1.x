import { RemoveLayerVersionPermissionRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Removes a statement from the permissions policy of a Lambda layer
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html RemoveLayerVersionPermission}
 */
export const removeLayerVersionPermission: Command<
  RemoveLayerVersionPermissionRequest,
  void
> = throwUnimplementedCommand('RemoveLayerVersionPermission');
