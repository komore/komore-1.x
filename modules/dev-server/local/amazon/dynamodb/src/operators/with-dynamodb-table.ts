import { OperatorFunction } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import { DynamoDBTable } from "../dynamodb-table";

export function withDynamoDBTable<T extends { TableName: string; }>(): OperatorFunction<T, [T, DynamoDBTable]> {
  return withLatestFrom();
};
