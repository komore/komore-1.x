import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type auroraCommand } from '../aurora.command';
import { type auroraEvent } from '../aurora.event';

/**
 * Aurora command to event mapping
 */
export const auroraClientCommandEventMapping = createClientCommandEventMap<
  CommandFromType<typeof auroraCommand>,
  EventFromType<typeof auroraEvent>
>()({
  batchExecuteStatement: '',
  beginTransaction: '',
  commitTransaction: '',
  executeStatement: '',
  rollbackTransaction: '',
});
