import {
  GlobalSecondaryIndexInfo,
  LocalSecondaryIndexInfo,
  SSEDescription,
  StreamSpecification,
  TimeToLiveDescription
} from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB table metadata
 */
export type DynamoDBTableMetadata = Readonly<{
  tableName: string;
  tableId: string;
  tableArn: string;
  creationTime: Date;
  secondaryIndices: Readonly<{
    local?: LocalSecondaryIndexInfo[];
    global?: GlobalSecondaryIndexInfo[];
  }>;
  streamSpecification?: StreamSpecification;
  ttlDescription?: TimeToLiveDescription;
  sseDescription?: SSEDescription;
}>;
