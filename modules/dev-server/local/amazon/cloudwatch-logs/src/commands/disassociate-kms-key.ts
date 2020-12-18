import { DisassociateKmsKeyRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Disassociates a KMS key from a log group
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html DisassociateKmsKey}
 */
export const disassociateKmsKey: Command<DisassociateKmsKeyRequest, void> = throwUnimplementedCommand(
  'DisassociateKmsKey'
);
