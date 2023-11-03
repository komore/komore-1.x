import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type neptuneCommand } from '../neptune.command';
import { type neptuneEvent } from '../neptune.event';

/**
 * Neptune command to event mapping
 */
export const neptuneCommandEventMapping = {} as const satisfies ReadonlyRecord<
  CommandName<typeof neptuneCommand>,
  EventName<typeof neptuneEvent>
>;
