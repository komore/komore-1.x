import { type Client } from '@komore/client';

import { type adyenCommand } from './adyen.command';
import { type adyenError } from './adyen.error';
import { type adyenEvent } from './adyen.event';
import { type adyenQuery } from './adyen.query';

/**
 * Adyen client
 */
export type AdyenClient = Client<
  typeof adyenCommand,
  typeof adyenEvent,
  typeof adyenQuery,
  typeof adyenError,
  typeof adyendClientCommandEventMap
>;
