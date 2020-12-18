import {
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput
} from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves the status of Kinesis streaming
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html DescribeKinesisStreamingDestination}
 */
export const describeKinesisStreamingDestination: Command<
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput
> = throwUnimplementedCommand('DescribeKinesisStreamingDestination');
