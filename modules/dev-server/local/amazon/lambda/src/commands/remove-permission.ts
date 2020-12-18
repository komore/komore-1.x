import { RemovePermissionRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Revokes a function-use permission from a service
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html RemovePermission}
 */
export const removePermission: Command<
  RemovePermissionRequest,
  void
> = throwUnimplementedCommand('RemovePermission');
