import { PublishLayerVersionRequest, PublishLayerVersionResponse } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a Lambda layer from a ZIP archive
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html PublishLayerVersion}
 */
export const publishLayerVersion: Command<
  PublishLayerVersionRequest,
  PublishLayerVersionResponse
> = throwUnimplementedCommand('PublishLayerVersion');
