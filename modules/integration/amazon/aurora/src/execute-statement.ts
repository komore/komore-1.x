import { ExecuteStatementCommand, ExecuteStatementCommandInput, RDSDataClient } from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-aws';

/**
 * Runs a SQL statement against a database
 * @param commandInput `ExecuteStatement` command input
 * @param auroraClient Aurora client
 * @returns Observable `ExecuteStatement` command output
 */
export const executeStatement = (commandInput: ExecuteStatementCommandInput, auroraClient: RDSDataClient) =>
  sendCommand(new ExecuteStatementCommand(commandInput), auroraClient);
