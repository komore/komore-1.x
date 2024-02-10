import { type CommandEventPairFromType } from '@komore/client';
import { type GitCliClient } from '@komore/git';

import { type gitCommand } from '../git.command';
import { type gitEvent } from '../git.event';

/**
 * Git command handler options
 */
export interface GitCommandHandlerOptions {
  /**
   * Git CLI client
   */
  readonly cliClient: GitCliClient;
  /**
   * Git events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof gitCommand, typeof gitEvent>) => void;
}
