import { CreateTableInput, CreateTableOutput, TableDescription } from '@aws-sdk/client-dynamodb';
import { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

/**
 * Creates a DynamoDB table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html CreateTable}
 */
export const createTable: Command<CreateTableInput, CreateTableOutput> = pipe(
  mergeMap(request => {

    const tableDescription: TableDescription = {

    };
  })
);
