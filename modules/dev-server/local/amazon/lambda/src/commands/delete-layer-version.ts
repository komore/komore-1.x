import { DeleteLayerVersionRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a layer version
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html DeleteLayerVersion}
 */
export const deleteLayerVersion: Command<
  DeleteLayerVersionRequest,
  void
> = throwUnimplementedCommand('DeleteLayerVersion');
