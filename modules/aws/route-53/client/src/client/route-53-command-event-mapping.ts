import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type route53Command } from '../route-53.command';
import { type route53Event } from '../route-53.event';

/**
 * Route 53 command event mapping
 */
export const route53CommandEventMapping = {
  changeResourceRecordSets: 'resourceRecordSetsChanged',
  createHostedZone: 'hostedZoneCreated',
  deleteHostedZone: 'hostedZoneDeleted',
} as const satisfies ReadonlyRecord<CommandName<typeof route53Command>, EventName<typeof route53Event>>;
