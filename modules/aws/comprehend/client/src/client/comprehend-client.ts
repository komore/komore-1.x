import { type Client } from '@komore/client';

import { type comprehendCommand } from '../comprehend.command';
import { type comprehendEvent } from '../comprehend.event';
import { type comprehendQuery } from '../comprehend.query';
import { type comprehendError } from '../comprehend.error';
import { type comprehendClientCommandEventMap } from './comprehend-client-command-event-map';

/**
 * Comprehend client
 */
export type ComprehendClient = Client<
  typeof comprehendCommand,
  typeof comprehendEvent,
  typeof comprehendQuery,
  typeof comprehendError,
  typeof comprehendClientCommandEventMap
>;
