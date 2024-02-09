import { type Client } from '@komore/client';

import { type teamsCommand } from '../teams.command';
import { type teamsEvent } from '../teams.event';
import { type teamsQuery } from '../teams.query';
import { type teamsError } from '../teams.error';
import { type teamsClientCommandEventMap } from './teams-client-command-event-map';

/**
 * Teams client
 */
export type TeamsClient = Client<
  typeof teamsCommand,
  typeof teamsEvent,
  typeof teamsQuery,
  typeof teamsError,
  typeof teamsClientCommandEventMap
>;
