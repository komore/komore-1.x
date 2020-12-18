import { DescribeLimitsInput, DescribeLimitsOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the current provisioned-capacity quotas
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html DescribeLimits}
 */
export const describeLimits: Command<DescribeLimitsInput, DescribeLimitsOutput> = throwUnimplementedCommand(
  'DescribeLimits'
);
