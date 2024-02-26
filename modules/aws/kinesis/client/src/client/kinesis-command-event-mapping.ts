import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type kinesisCommand } from '../kinesis.command';
import { type kinesisEvent } from '../kinesis.event';

/**
 * Kinesis command to event mapping
 */
export const kinesisCommandEventMapping = {} as const satisfies ReadonlyRecord<
  CommandName<typeof kinesisCommand>,
  EventName<typeof kinesisEvent>
>;
