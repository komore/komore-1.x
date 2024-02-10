import { type GitCliClient } from '@komore/git';

/**
 * Git client options
 */
export interface GitClientOptions {
  /**
   * Git CLI client
   */
  readonly cliClient: GitCliClient;
}
