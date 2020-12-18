import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the auto-scaling settings across replicas of a global table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html DescribeTableReplicaAutoScaling}
 */
export const describeTableReplicaAutoScaling: Command<
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput
> = throwUnimplementedCommand('DescribeTableReplicaAutoScaling');
