import { type Client } from '@komore/client';

import { type translateCommand } from '../translate.command';
import { type translateError } from '../translate.error';
import { type translateEvent } from '../translate.event';
import { type translateQuery } from '../translate.query';
import { type translateClientCommandEventMap } from './translate-client-command-event-map';

/**
 * Translate client
 */
export interface TranslateClient
  extends Client<
    typeof translateCommand,
    typeof translateEvent,
    typeof translateQuery,
    typeof translateError,
    typeof translateClientCommandEventMap
  > {}
