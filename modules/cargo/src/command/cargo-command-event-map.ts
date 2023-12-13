import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type cargoCommand } from '../cargo.command';
import { type cargoEvent } from '../cargo.event';

/**
 * Cargo command-to-event map
 */
export const cargoCommandEventMap = {} as const satisfies ReadonlyRecord<
  CommandFromType<typeof cargoCommand>,
  EventFromType<typeof cargoEvent>
>;
