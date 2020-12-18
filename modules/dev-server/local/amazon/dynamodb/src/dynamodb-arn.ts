import { createArn } from '@komore/dev-server-local-amazon/service';
import { v4 as uuid } from 'uuid';

export const dynamoDBNamespace = 'dynamodb' as const;
const tableResourceType = 'table' as const;
const streamResourceType = 'stream' as const;
const backupResourceType = 'backup' as const;

/**
 * Creates a table ARN
 * @param tableName Table name
 * @returns Table ARN
 */
export function createTableArn(tableName: string): string {
  return createArn(dynamoDBNamespace, tableResourceType, tableName);
}

/**
 * Creates a table stream ARN
 * @param tableName Table name
 * @param streamName Stream name
 * @returns Table stream ARN
 */
export function createTableStreamArn(tableName: string, streamName: string): string {
  return createArn(dynamoDBNamespace, tableResourceType, tableName, streamResourceType, streamName);
}

/**
 * Creates a table backup ARN
 * @param tableName Table name
 * @returns Table backup ARN
 */
export function createBackupArn(tableName: string): string {
  const backupId = uuid();
  return createArn(dynamoDBNamespace, tableResourceType, tableName, backupResourceType, backupId);
}
