import { createEventType, eventProperties, type EventFromType } from '@komore/event';

import { cliDomain } from './cli.domain';
import { type DisplayedCliMessage } from './display/displayed-cli-message';

/**
 * Command-line interface event
 */
export const cliEvent = createEventType(cliDomain, {
  applicationEnded: eventProperties<{ exitCode: number }>(),
  messageDisplayed: eventProperties<DisplayedCliMessage>(),
});

/**
 * Command-line interface event
 */
export type CliEvent = EventFromType<typeof cliEvent>;
