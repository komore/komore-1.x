import type { OperatorFunction } from '@komore/reactive';
import { withLatestFrom } from '@komore/reactive/operators';
import type { DynamoDBTable } from '../dynamodb-table';

export function withDynamoDBTable<T extends { TableName: string }>(): OperatorFunction<T, [T, DynamoDBTable]> {
  return withLatestFrom();
}
