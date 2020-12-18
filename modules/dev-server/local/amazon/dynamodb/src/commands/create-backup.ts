import {
  BackupDescription,
  BackupDetails,
  CreateBackupInput,
  CreateBackupOutput,
  SourceTableDetails,
  SourceTableFeatureDetails,
  TimeToLiveDescription
} from '@aws-sdk/client-dynamodb';
import { Command } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';
import { createBackupArn } from '../dynamodb-arn';
import { createDynamoDBBackup } from '../dynamodb-backups';
import { withDynamoDBTable } from '../operators/with-dynamodb-table';

type TempCreateBackupInput = CreateBackupInput & { TableName: string; BackupName: string };

/**
 * Creates a backup for an existing table
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html CreateBackup}
 */
export const createBackup: Command<TempCreateBackupInput, CreateBackupOutput> = pipe(
  withDynamoDBTable(),
  mergeMap(([{ BackupName }, { metadata }]) => {
    const BackupArn = createBackupArn(metadata.tableName);
    const BackupDetails: BackupDetails = {
      BackupArn,
      BackupName,
      BackupSizeBytes: 0,
      BackupStatus: 'AVAILABLE',
      BackupType: 'USER',
      BackupCreationDateTime: new Date(),
      BackupExpiryDateTime: undefined
    };
    const SourceTableDetails: SourceTableDetails = {
      TableName: metadata.tableName,
      TableId: metadata.tableId,
      TableArn: metadata.tableArn,
      TableSizeBytes: 0,
      KeySchema,
      TableCreationDateTime: metadata.creationTime,
      ProvisionedThroughput: undefined,
      ItemCount: 0,
      BillingMode: 'PAY_PER_REQUEST'
    };
    const SourceTableFeatureDetails: SourceTableFeatureDetails = {
      LocalSecondaryIndexes: metadata.secondaryIndices.local,
      GlobalSecondaryIndexes: metadata.secondaryIndices.global,
      TimeToLiveDescription: metadata.ttlDescription,
      StreamDescription: metadata.streamSpecification,
      SSEDescription: metadata.sseDescription
    };
    const backupDescription: BackupDescription = {
      BackupDetails,
      SourceTableDetails,
      SourceTableFeatureDetails
    };

    return createDynamoDBBackup(backupDescription).pipe(
      // TODO: catchError
    );
  })
);
