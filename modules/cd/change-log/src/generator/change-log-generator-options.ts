import { type GitCliClient } from '@komore/git';

/**
 * Change log generator options
 */
export interface ChangeLogGeneratorOptions {
  /**
   * Application name
   */
  readonly applicationName: string;
  /**
   * Git CLI client
   */
  readonly gitCliClient: GitCliClient;
}
