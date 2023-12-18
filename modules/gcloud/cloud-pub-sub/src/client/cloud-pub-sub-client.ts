import { type Client } from '@komore/client';

import { type cloudPubSubCommand } from '../cloud-pub-sub.command';
import { type cloudPubSubEvent } from '../cloud-pub-sub.event';
import { type cloudPubSubQuery } from '../cloud-pub-sub.query';
import { type cloudPubSubError } from '../cloud-pub-sub.error';

/**
 * Cloud Pub/Sub client
 */
export type CloudPubSubClient = Client<
  typeof cloudPubSubCommand,
  typeof cloudPubSubEvent,
  typeof cloudPubSubQuery,
  typeof cloudPubSubError,
  typeof cloudPubSubCommandEventMap
>;
