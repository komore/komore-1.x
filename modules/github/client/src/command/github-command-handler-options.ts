import { CommandEventPair } from '@komore/client';
import { CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type GitHubApiClient } from '@komore/github';
import { type Observable } from '@komore/reactive';

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
  readonly toEvents: (
    pair: CommandEventPair<
      CommandFromType<(typeof gitHubCommand)[keyof typeof gitHubCommand]>,
      EventFromType<(typeof gitHubEvent)[keyof typeof gitHubEvent]>
    >
  ) => void;
}
