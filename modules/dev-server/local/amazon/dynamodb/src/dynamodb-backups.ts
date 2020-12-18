import { BackupDescription } from '@aws-sdk/client-dynamodb';
import { Observable, of, throwError } from 'rxjs';

const dynamoDBBackups = new Map<string, BackupDescription>();

export function getDynamoDBBackup(backupArn: string): Observable<BackupDescription | undefined> {
  const dynamoDBBackup = dynamoDBBackups.get(backupArn);
  if (dynamoDBBackup === undefined) {
    return throwError(() => new Error(`DynamoDB backup ARN ${backupArn} not found`));
  }

  return of(dynamoDBBackup);
}

export function createDynamoDBBackup(backupDescription: BackupDescription): Observable<BackupDescription> {
  const backupArn = backupDescription.BackupDetails?.BackupArn!; // TODO: remove ! after AWS types are fixed
  if (dynamoDBBackups.has(backupArn)) {
    throw new Error(`DynamoDB backup ${backupArn} already exists`);
  }

  dynamoDBBackups.set(backupArn, backupDescription);

  return of(backupDescription);
}

export function deleteDynamoDBBackup(backupArn: string): Observable<BackupDescription> {
  const backupDescription = dynamoDBBackups.get(backupArn);
  if (backupDescription === undefined) {
    throw new Error(`DynamoDB backup ${backupArn} not found`);
  }

  dynamoDBBackups.delete(backupArn);

  return of(backupDescription);
}
