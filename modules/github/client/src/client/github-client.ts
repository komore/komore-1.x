import { type Client } from '@komore/client';

import { type gitHubCommand } from '../github.command';
import { type gitHubEvent } from '../github.event';
import { type gitHubError } from '../github.error';
import { type gitHubQuery } from '../github.query';
import { type gitHubCommandEventMap } from './github-command-event-map';

/**
 * GitHub client
 */
export type GitHubClient = Client<
  (typeof gitHubCommand)[keyof typeof gitHubCommand],
  (typeof gitHubEvent)[keyof typeof gitHubEvent],
  typeof gitHubQuery,
  typeof gitHubError,
  typeof gitHubCommandEventMap
>;
