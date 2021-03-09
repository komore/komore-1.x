import type { DescribeBackupInput, DescribeBackupOutput } from '@aws-sdk/client-dynamodb';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { map, mergeMap } from '@komore/reactive/operators';
import { getDynamoDBBackup } from '../dynamodb-backups';

type TempDescribeBackupInput = DescribeBackupInput & { BackupArn: string };

/**
 * Describes a backup
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html DescribeBackup}
 */
export const describeBackup: Command<TempDescribeBackupInput, DescribeBackupOutput> = mergeMap(({ BackupArn }) =>
  getDynamoDBBackup(BackupArn).pipe(
    map(BackupDescription => ({
      BackupDescription
    }))
  )
);
