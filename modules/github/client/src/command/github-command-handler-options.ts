import { type CommandEventPairFromType } from '@komore/client';
import { type GitHubApiClient } from '@komore/github';

import { type gitHubCommand } from '../github.command';
import { type gitHubEvent } from '../github.event';

/**
 * GitHub command handler options
 */
export interface GitHubCommandHandlerOptions {
  /**
   * GitHub API client
   */
  readonly apiClient$: Observable<GitHubApiClient>;
  /**
   * GitHub events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof gitHubCommand, typeof gitHubEvent>) => void;
}
