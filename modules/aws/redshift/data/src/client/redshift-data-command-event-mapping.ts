import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type redshiftDataCommand } from '../redshift-data.command';
import { type redshiftDataEvent } from '../redshift-data.event';

/**
 * Redshift Data command event mapping
 */
export const redshiftDataCommandEventMapping = {
  executeStatement: 'statementExecuted',
} as const satisfies ReadonlyRecord<CommandName<typeof redshiftDataCommand>, EventName<typeof redshiftDataEvent>>;
