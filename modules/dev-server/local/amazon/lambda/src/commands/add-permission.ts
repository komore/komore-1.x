import { AddPermissionRequest, AddPermissionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Grants a permission to use a function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html AddPermission}
 */
export const addPermission: Command<
  AddPermissionRequest,
  AddPermissionResponse
> = throwUnimplementedCommand('AddPermission');
