import { TableDescription } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DynamoDBTable } from './dynamodb-table';
import { DynamoDBTableMetadata } from './dynamodb-table-metadata';

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
        // The table has already been deleted
        throw new Error(`DynamoDB table ${tableName} not found`);
      };

      dynamoDBTable$?.complete();

      return description;
    })
  )
  const dynamoDBTable$ = dynamoDBTables.get(tableName);
  if (dynamoDBTable$ === undefined) {
    throw new Error(`DynamoDB table ${tableName} not found`);
  }

  const dynamoDBTable = dynamoDBTable$.value;

  dynamoDBTable$.complete();
  dynamoDBTables.delete(tableName);

  return of(dynamoDBTable.description);
}

export function updateDynamoDBTableMetadata(
  tableName: string,
  project: (metadata: DynamoDBTableMetadata) => DynamoDBTableMetadata
): Observable<DynamoDBTableMetadata> {
  const dynamoDBTable$ = dynamoDBTables.get(tableName);
  if (dynamoDBTable$ === undefined) {
  }
}
