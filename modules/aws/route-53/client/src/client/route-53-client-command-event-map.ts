import { createClientCommandEventMap } from '@komore/client';

import { type route53Command } from '../route-53.command';
import { type route53Event } from '../route-53.event';

/**
 * Route 53 client command-to-event map
 */
export const route53ClientCommandEventMap = createClientCommandEventMap<typeof route53Command, typeof route53Event>()({
  changeResourceRecordSets: 'resourceRecordSetsChanged',
  createHostedZone: 'hostedZoneCreated',
  deleteHostedZone: 'hostedZoneDeleted',
});
