import { DeleteTableInput, DeleteTableOutput, TableDescription } from '@aws-sdk/client-dynamodb';
import { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { deleteDynamoDBTable } from '../dynamodb-tables';

type TempDeleteTableInput = DeleteTableInput & { TableName: string };

/**
 * Deletes a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html DeleteTable}
 */
export const createTable: Command<TempDeleteTableInput, DeleteTableOutput> = pipe(
  mergeMap(({ TableName }) =>
    deleteDynamoDBTable(TableName).pipe(
      map(TableDescription => ({
        TableDescription
      }))
    )
  )
);
