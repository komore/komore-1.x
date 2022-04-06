import {
  type BatchGetItemCommandInput,
  BatchGetItemCommand,
  type BatchGetItemCommandOutput,
  type DynamoDBClient
} from '@aws-sdk/client-dynamodb';
import { sendBatchCommand } from '@komore/integration-amazon';

/**
 * `BatchGetItem` command output with guaranteed consumed capacity and response properties
 */
type BatchGetItemReducedCommandOutput = BatchGetItemCommandOutput & {
  ConsumedCapacity: NonNullable<BatchGetItemCommandOutput['ConsumedCapacity']>;
  Responses: NonNullable<BatchGetItemCommandOutput['Responses']>;
};

/**
 * Gets the attributes of one or more items from one or more tables
 * @param dynamoDBClient DynamoDB client
 * @param commandInput `BatchGetItem` command input
 * @returns Observable `BatchGetItem` command output
 * @note This function contains logic to work around the 100 items per response limit of `BatchGetItem`
 * @note This function contains logic to work around the 16 MB per response limit of `BatchGetItem`
 * @note The `$metadata` property of the output only contains information about the last `BatchGetItem` operation
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html BatchGetItem}
 */
export const batchGetItem = (dynamoDBClient: DynamoDBClient, commandInput: BatchGetItemCommandInput) =>
  sendBatchCommand(
    dynamoDBClient,
    commandInput,
    input => new BatchGetItemCommand(input),
    result => (result.UnprocessedKeys ? { ...commandInput, RequestItems: result.UnprocessedKeys } : undefined),
    reduceBatchGetItemCommandOutputs,
    {
      $metadata: {},
      ConsumedCapacity: [],
      Responses: {}
    } as BatchGetItemReducedCommandOutput
  );

/**
 * Reduces `BatchGetItem` command outputs into a single output
 * @param prev Previous `BatchGetItem` command output
 * @param curr Current `BatchGetItem` command output
 * @returns Reduced `BatchGetItem` command output
 * @note To improve performance, the previous command gets mutated
 */
function reduceBatchGetItemCommandOutputs(
  prev: BatchGetItemReducedCommandOutput,
  curr: BatchGetItemCommandOutput
): BatchGetItemReducedCommandOutput {
  if (curr.Responses !== undefined) {
    for (const [tableName, items] of Object.entries(curr.Responses)) {
      const prevItems = (prev.Responses[tableName] = prev.Responses[tableName] || []);
      prevItems.concat(items);
    }
  }

  if (curr.ConsumedCapacity !== undefined) {
    // TODO
    console.warn('TODO: consumed capacity merging');
  }

  return {
    ...prev,
    $metadata: curr.$metadata
  };
}
