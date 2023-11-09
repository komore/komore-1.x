import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type auroraCommand } from '../aurora.command';
import { type auroraEvent } from '../aurora.event';

/**
 * Aurora command to event mapping
 */
export const auroraCommandEventMapping = {
  batchExecuteStatement: '',
  beginTransaction: '',
  commitTransaction: '',
  executeStatement: '',
  rollbackTransaction: '',
} as const satisfies ReadonlyRecord<CommandName<typeof auroraCommand>, EventName<typeof auroraEvent>>;
