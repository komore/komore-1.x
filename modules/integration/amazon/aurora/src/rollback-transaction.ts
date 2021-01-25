import type { RollbackTransactionCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { RollbackTransactionCommand } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Performs a rollback of a SQL transaction, cancelling its changes
 * @param commandInput `RollbackTransaction` command input
 * @param auroraClient Aurora client
 * @returns Observable `RollbackTransaction` command output
 */
export const rollbackTransaction = (auroraClient: RDSDataClient, commandInput: RollbackTransactionCommandInput) =>
  sendCommand(auroraClient, new RollbackTransactionCommand(commandInput));
