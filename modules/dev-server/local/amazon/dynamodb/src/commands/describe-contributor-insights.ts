import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves information about contributor insights for a DynamoDB table or GSI
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html DescribeContributorInsights}
 */
export const describeContributorInsights: Command<
  DescribeContributorInsightsInput,
  DescribeContributorInsightsOutput
> = throwUnimplementedCommand('DescribeContributorInsights');
