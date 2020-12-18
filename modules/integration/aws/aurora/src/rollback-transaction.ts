import {
  RollbackTransactionCommand,
  RollbackTransactionCommandInput,
  RollbackTransactionCommandOutput,
  RDSDataClient
} from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-aws';
import { Observable } from 'rxjs';
import { getAuroraClient } from './aurora-client';

/**
 * Performs a rollback of a SQL transaction, cancelling its changes
 * @param commandInput `RollbackTransaction` command input
 * @param auroraClient Aurora client
 * @returns Observable `RollbackTransaction` command output
 */
export function rollbackTransaction(
  commandInput: RollbackTransactionCommandInput,
  auroraClient?: RDSDataClient
): Observable<RollbackTransactionCommandOutput> {
  return sendCommand(new RollbackTransactionCommand(commandInput), getAuroraClient(auroraClient));
}
