import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  RDSDataClient
} from '@aws-sdk/client-rds-data';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Begins a SQL transaction
 * @param commandInput `BatchExecuteStatement` command input
 * @param auroraClient Aurora client
 * @returns Observable `BatchExecuteStatement` command output
 */
export const batchExecuteStatement = (commandInput: BatchExecuteStatementCommandInput, auroraClient: RDSDataClient) =>
  sendCommand(new BatchExecuteStatementCommand(commandInput), auroraClient);
