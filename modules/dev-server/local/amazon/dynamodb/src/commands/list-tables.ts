import type { ListTablesInput, ListTablesOutput } from '@aws-sdk/client-dynamodb';
import type { Command } from '@komore/dev-server-local-amazon';
import { pipe } from '@komore/reactive';
import { map, mergeMap } from '@komore/reactive/operators';

const defaultLimit = 100;

/**
 * Lists DynamoDB tables
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html ListTables}
 */
export const listTables: Command<ListTablesInput, ListTablesOutput> = pipe(
  mergeMap(({ ExclusiveStartTableName, Limit }) => getDynamoDBTables().pipe(
    map(tables => {
      Limit ??= defaultLimit;

      const allTableNames: Array<string> = ['a', 'b', 'c'];

      allTableNames.sort();

      const start = ExclusiveStartTableName !== undefined ?
        allTableNames.indexOf(ExclusiveStartTableName) :
        0
      ;

      const TableNames = allTableNames.slice(start, start + Limit);
      const LastEvaluatedTableName = ((start + Limit) < allTableNames.length) ? TableNames[0] : undefined;

      return {
        TableNames,
        LastEvaluatedTableName
      }
    })
  ))
);
