import { auroraDomain } from '@komore/aws/aurora';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * Aurora command
 */
export const auroraCommand = createCommandType(auroraDomain, {
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
