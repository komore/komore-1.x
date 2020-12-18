import { PutQueryDefinitionRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates or updates a query definition
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html PutQueryDefinition}
 */
export const putQueryDefinition: Command<PutQueryDefinitionRequest, void> = throwUnimplementedCommand(
  'PutQueryDefinition'
);
