import { DeleteQueryDefinitionRequest } from '@aws-sdk/client-cloudwatch-logs';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a query definition
 * @note {@link https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html DeleteQueryDefinition}
 */
export const deleteQueryDefinition: Command<DeleteQueryDefinitionRequest, void> = throwUnimplementedCommand(
  'DeleteQueryDefinition'
);
