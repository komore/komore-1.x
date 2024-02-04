import { type Client } from '@komore/client';

import { type gitLabCommand } from './gitlab.command';
import { type gitLabError } from './gitlab.error';
import { type gitLabEvent } from './gitlab.event';
import { type gitLabQuery } from './gitlab.query';

/**
 * GitLab client
 */
export type GitLabClient = Client<
  typeof gitLabCommand,
  typeof gitLabEvent,
  typeof gitLabQuery,
  typeof gitLabError,
  typeof gitLabClientCommandEventMap
>;
