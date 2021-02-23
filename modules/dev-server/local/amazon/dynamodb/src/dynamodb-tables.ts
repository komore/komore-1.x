import type { TableDescription } from '@aws-sdk/client-dynamodb';
import type { Observable } from '@komore/reactive';
import { BehaviorSubject, throwError } from '@komore/reactive';
import { map, take } from '@komore/reactive/operators';
import type { DynamoDBTable } from './dynamodb-table';
import type { DynamoDBTableMetadata } from './dynamodb-table-metadata';

/**
 * DynamoDB tables
 */
const dynamoDBTables = new Map<string, BehaviorSubject<DynamoDBTable>>();

function getDynamoDBTable(tableName: string): Observable<DynamoDBTable> {
  const dynamoDBTable$ = dynamoDBTables.get(tableName);
  if (dynamoDBTable$ === undefined) {
    return throwError(() => new Error(`DynamoDB table ${tableName} not found`));
  }

  return dynamoDBTable$.pipe(take(1));
}

export function deleteDynamoDBTable(tableName: string): Observable<TableDescription> {
  return getDynamoDBTable(tableName).pipe(
    map(({ description }) => {
      const dynamoDBTable$ = dynamoDBTables.get(tableName);

      if (!dynamoDBTables.delete(tableName)) {
        throw new Error(`DynamoDB table ${tableName} not found`);
      };

      dynamoDBTable$?.complete();

      return description;
    })
  );
}

export function updateDynamoDBTableMetadata(
  dynamoDBTable: string,
  project: (metadata: DynamoDBTableMetadata) => DynamoDBTableMetadata
): Observable<DynamoDBTableMetadata> {
  const dynamoDBTable$ = dynamoDBTables.get(tableName);
  if (dynamoDBTable$ === undefined) {
  }
}
