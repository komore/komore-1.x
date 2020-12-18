import { FunctionConfiguration, PublishVersionRequest } from '@aws-sdk/client-lambda';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a version from the current code and configuration of a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html PublishVersion}
 */
export const publishVersion: Command<PublishVersionRequest, FunctionConfiguration> = throwUnimplementedCommand(
  'PublishVersion'
);
