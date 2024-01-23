import { type Client } from '@komore/client';

import { type eToroCommand } from '../etoro.command';
import { type eToroError } from '../etoro.error';
import { type eToroEvent } from '../etoro.event';
import { type eToroQuery } from '../etoro.query';
import { type eToroCommandEventMap } from './etoro-command-event-map';

/**
 * eToro client
 */
export type EToroClient = Client<
  typeof eToroCommand,
  typeof eToroEvent,
  typeof eToroQuery,
  typeof eToroError,
  typeof eToroCommandEventMap
>;
