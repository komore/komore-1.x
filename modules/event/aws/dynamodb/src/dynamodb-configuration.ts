import { Credentials } from '@aws-sdk/types';

/**
 * DynamoDB event repository configuration
 */
export type DynamoDBConfiguration = Readonly<{
  tableName: string;
  credentials: () => Promise<Credentials>;
  region: () => Promise<string>;
}>;
