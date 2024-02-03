import { type CommandEventHandler } from '@komore/client';

import { type gitHubCommandEventMap } from '../client/github-command-event-map';
import { type gitHubCommand } from '../github.command';
import { type gitHubEvent } from '../github.event';

/**
 * GitHub command-event handler
 *
 * @private
 */
export type GitHubCommandEventHandler<CommandName extends keyof typeof gitHubCommandEventMap> = CommandEventHandler<
  (typeof gitHubCommand)[keyof typeof gitHubCommand],
  CommandName,
  (typeof gitHubEvent)[keyof typeof gitHubEvent]
>;

// TODO: move away
