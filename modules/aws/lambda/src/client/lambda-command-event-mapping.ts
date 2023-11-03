import { type CommandName } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';
import { type EventName } from '@komore/event';

import { type lambdaCommand } from '../lambda.command';
import { type lambdaEvent } from '../lambda.event';

/**
 * Lambda command to event mapping
 *
 * @private
 */
export const lambdaCommandEventMapping = {
  invokeFunction: 'functionInvoked',
} as const satisfies ReadonlyRecord<CommandName<typeof lambdaCommand>, EventName<typeof lambdaEvent>>;
