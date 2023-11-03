import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type translateCommand } from '../translate.command';
import { type translateEvent } from '../translate.event';

/**
 * Translate command to event mapping
 *
 * @private
 */
export const translateCommandEventMapping = {
  translateText: 'textTranslated',
} as const satisfies ReadonlyRecord<CommandName<typeof translateCommand>, EventName<typeof translateEvent>>;
