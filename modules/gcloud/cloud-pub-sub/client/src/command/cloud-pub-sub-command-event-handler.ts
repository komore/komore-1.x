import { type CommandEventHandler } from '@komore/client';

import { type cloudPubSubCommandEventMap } from '../../client/cloud-pub-sub-command-event-map';
import { type cloudPubSubCommand } from '../../cloud-pub-sub.command';
import { type cloudPubSubEvent } from '../../cloud-pub-sub.event';

/**
 * Cloud Pub/Sub command-event handler
 *
 * @private
 */
export type CloudPubSubCommandEventHandler<CommandName extends keyof typeof cloudPubSubCommandEventMap> =
  CommandEventHandler<typeof cloudPubSubCommand, CommandName, typeof cloudPubSubEvent>;
