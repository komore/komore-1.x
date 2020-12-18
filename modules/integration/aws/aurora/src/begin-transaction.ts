import { BeginTransactionCommand, BeginTransactionCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-aws';

/**
 * Begins a SQL transaction
 * @param commandInput `BeginTransaction` command input
 * @param auroraClient Aurora client
 * @returns Observable `BeginTransaction` command output
 */
export const beginTransaction = (commandInput: BeginTransactionCommandInput, auroraClient: RDSDataClient) =>
  sendCommand(new BeginTransactionCommand(commandInput), auroraClient);
