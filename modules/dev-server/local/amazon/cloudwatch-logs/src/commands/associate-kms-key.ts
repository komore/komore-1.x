import { AssociateKmsKeyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Associates a KMS key with a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html AssociateKmsKey}
 */
export const associateKmsKey: Command<AssociateKmsKeyRequest, void> = throwUnimplementedCommand(
  'AssociateKmsKey'
);
