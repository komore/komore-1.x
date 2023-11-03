import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type redshiftCommand } from '../redshift.command';
import { type redshiftEvent } from '../redshift.event';

/**
 * Redshift command event mapping
 */
export const redshiftCommandEventMapping = {
  rebootCluster: 'clusterRebootRequested',
} as const satisfies ReadonlyRecord<CommandName<typeof redshiftCommand>, EventName<typeof redshiftEvent>>;
