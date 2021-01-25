import type { CommitTransactionCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { CommitTransactionCommand } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Ends a SQL transaction and commits the changes
 * @param auroraClient Aurora client
 * @param commandInput `CommitTransaction` command input
 * @returns Observable `CommitTransaction` command output
 */
export const commitTransaction = (auroraClient: RDSDataClient, commandInput: CommitTransactionCommandInput) =>
  sendCommand(auroraClient, new CommitTransactionCommand(commandInput));
