import { CommitTransactionCommand, CommitTransactionCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-aws';

/**
 * Ends a SQL transaction and commits the changes
 * @param commandInput `CommitTransaction` command input
 * @param auroraClient Aurora client
 * @returns Observable `CommitTransaction` command output
 */
export const commitTransaction = (commandInput: CommitTransactionCommandInput, auroraClient: RDSDataClient) =>
  sendCommand(new CommitTransactionCommand(commandInput), auroraClient);
