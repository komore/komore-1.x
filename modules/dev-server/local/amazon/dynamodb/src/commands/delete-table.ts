import type { DeleteTableInput, DeleteTableOutput } from '@aws-sdk/client-dynamodb';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { map, mergeMap } from '@komore/reactive/operators';
import { deleteDynamoDBTable } from '../dynamodb-tables';

type TempDeleteTableInput = DeleteTableInput & { TableName: string };

/**
 * Deletes a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html DeleteTable}
 */
export const deleteTable: Command<TempDeleteTableInput, DeleteTableOutput> = mergeMap(({ TableName }) =>
  deleteDynamoDBTable(TableName).pipe(
    map(TableDescription => ({
      TableDescription
    }))
  )
);
