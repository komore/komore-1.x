import {
  type BeginTransactionCommandInput,
  type BatchExecuteStatementCommandInput,
  type CommitTransactionCommandInput,
  type ExecuteStatementCommandInput,
  type RollbackTransactionCommandInput,
} from '@aws-sdk/client-rds-data';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora command
 */
export const auroraCommand = createAwsCommandType(auroraDomain, {
  /**
   * TODO
   *
   * @see {@link }
   */
  batchExecuteStatement: commandProperties<BatchExecuteStatementCommandInput>(),
  /**
   * TODO
   *
   * @see {@link }
   */
  beginTransaction: commandProperties<BeginTransactionCommandInput>(),
  /**
   * TODO
   *
   * @see {@link }
   */
  commitTransaction: commandProperties<CommitTransactionCommandInput>(),
  /**
   * TODO
   *
   * @see {@link }
   */
  executeStatement: commandProperties<ExecuteStatementCommandInput>(),
  /**
   * TODO
   *
   * @see {@link }
   */
  rollbackTransaction: commandProperties<RollbackTransactionCommandInput>(),
});
