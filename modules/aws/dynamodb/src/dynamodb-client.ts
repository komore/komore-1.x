import { type Observable } from '@komore/reactive';

/**
 * DynamoDB client
 */
export interface DynamoDBClient {
  (command: unknown): Observable<unknown>;
}
