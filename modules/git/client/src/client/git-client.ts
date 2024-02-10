import { type Client } from '@komore/client';

import { type gitCommand } from '../git.command';
import { type gitError } from '../git.error';
import { type gitEvent } from '../git.event';
import { type gitQuery } from '../git.query';
import { type gitClientCommandEventMap } from './git-client-command-event-map';

/**
 * git client
 */
export type GitClient = Client<
  typeof gitCommand,
  typeof gitEvent,
  typeof gitQuery,
  typeof gitError,
  typeof gitClientCommandEventMap
>;
