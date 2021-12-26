import {
  BeginTransactionCommand,
  type BeginTransactionCommandInput,
  type RDSDataClient
} from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Begins a SQL transaction
 * @param commandInput `BeginTransaction` command input
 * @param auroraClient Aurora client
 * @returns Observable `BeginTransaction` command output
 */
export const beginTransaction = (auroraClient: RDSDataClient, commandInput: BeginTransactionCommandInput) =>
  sendCommand(auroraClient, new BeginTransactionCommand(commandInput));
