import type { ExecuteStatementCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { ExecuteStatementCommand } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Runs a SQL statement against a database
 * @param commandInput `ExecuteStatement` command input
 * @param auroraClient Aurora client
 * @returns Observable `ExecuteStatement` command output
 */
export const executeStatement = (auroraClient: RDSDataClient, commandInput: ExecuteStatementCommandInput) =>
  sendCommand(auroraClient, new ExecuteStatementCommand(commandInput));
