import type { DeleteBackupInput, DeleteBackupOutput } from '@aws-sdk/client-dynamodb';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { map, mergeMap } from '@komore/reactive/operators';
import { deleteDynamoDBBackup } from '../dynamodb-backups';

type TempDeleteBackupInput = DeleteBackupInput & { BackupArn: string };

/**
 * Deletes a backup
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html DeleteBackup}
 */
// TODO: validate return type, documentation mentions it returns the description for the newly created backup
export const deleteBackup: Command<TempDeleteBackupInput, DeleteBackupOutput> = mergeMap(({ BackupArn }) =>
  deleteDynamoDBBackup(BackupArn).pipe(
    map(BackupDescription => ({
      BackupDescription
    }))
  )
);
