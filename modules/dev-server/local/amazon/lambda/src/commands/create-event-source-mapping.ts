import { CreateEventSourceMappingRequest, EventSourceMappingConfiguration, EventSourcePosition } from '@aws-sdk/client-lambda';
import { pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { assertSupportedRequest } from '../../assert-supported-request';
import { Command } from '../../command';
import { getLambdaFunction } from '../lambda-functions';

type TempCreateEventSourceMappingRequest = CreateEventSourceMappingRequest & { FunctionName: string };

/**
 * Creates an event source mapping
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html CreateEventSourceMapping}
 */
export const createEventSourceMapping: Command<
  TempCreateEventSourceMappingRequest,
  EventSourceMappingConfiguration
> = pipe(
  assertSupportedRequest(),
  mergeMap(({ Enabled, EventSourceArn, EventSourcePosition, FunctionName, ...request }) => {
    // EventSourceArn: Kinesis stream | DynamoDB stream | SQS queue | Kafka cluster

    const lambdaFunction = getLambdaFunction(FunctionName);
    if (lambdaFunction === undefined) {
      throw new Error(`Lambda function ${FunctionName} not found`);
    }

    const { BatchSize, MaximumBatchingWindowInSeconds, ParallelizationFactor } = request;
    // Batch size:
    // - Kinesis: default 100, max 10k
    // - DynamoDB: default 100, max 1k
    // - SQS: default 10, max 10
    // - Kafka: default 100, max 10k

    const { StartingPosition, StartingPositionTimestamp } = request;
    // StartingPosition: AT_TIMESTAMP, LATEST, TRIM_HORIZON

    switch ()
  })
);



export interface CreateEventSourceMappingRequest {

  /**
   * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;
  /**
   * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1).</p>
   */
  MaximumRecordAgeInSeconds?: number;
  /**
   * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;
  /**
   * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
   */
  MaximumRetryAttempts?: number;
  /**
   * <p>
   *       (MSK) The name of the Kafka topic.
   *     </p>
   */
  Topics?: string[];
  /**
   * <p>
   *       (MQ) The name of the Amazon MQ broker destination queue to consume.
   *     </p>
   */
  Queues?: string[];
  /**
   * <p>
   *       (MQ) The Secrets Manager secret that stores your broker credentials. To store your secret, use the following format:
   *       <code>	  {
   *         "username": "your username",
   *         "password": "your password"
   *         }</code>
   *          </p>
   *
   *          <p>To reference the secret, use the following format:
   *       <code>[
   *         {
   *         "Type": "BASIC_AUTH",
   *         "URI": "secretARN"
   *         }
   *         ]</code>
   *          </p>
   *          <p>The value of <code>Type</code> is always <code>BASIC_AUTH</code>. To encrypt the secret, you can use customer or service managed keys. When using a customer managed KMS key, the Lambda execution role requires <code>kms:Decrypt</code> permissions.</p>
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];
}