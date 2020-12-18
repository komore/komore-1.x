import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from '@aws-sdk/client-dynamodb';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Describes a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html DisableKinesisStreamingDestination}
 */
export const disableKinesisStreamingDestination: Command<
  KinesisStreamingDestinationInput,
  KinesisStreamingDestinationOutput
> = throwUnimplementedCommand('DisableKinesisStreamingDestination');
