import { type GitCliClient } from '@komore/git';

/**
 * Git query handler options
 */
export interface GitQueryHandlerOptions {
  /**
   * Git CLI client
   */
  readonly cliClient: GitCliClient;
}
