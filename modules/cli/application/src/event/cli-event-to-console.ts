import { bgGreenBright, bgRedBright, bgYellowBright, green, red, yellow, whiteBright } from 'chalk';

import { cliEvent, type DisplayedCliMessageType } from '@komore/cli';
import { matchEvent, type EventFromType } from '@komore/event';
import { identity, pipe } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that displays command-line events in the console, eventually emitting an exit code
 *
 * @returns Function that displays command-line events in the console, eventually emitting an exit code
 * @private
 */
export function cliEventToConsole(): (event: EventFromType<typeof cliEvent>) => void {
  const colorByType: ReadonlyRecord<
    DisplayedCliMessageType,
    readonly [type: (value: string) => string, message: (value: string) => string]
  > = {
    failure: [pipe(bgRedBright, whiteBright), red],
    normal: [identity, identity],
    success: [pipe(bgGreenBright, whiteBright), green],
    warning: [pipe(bgYellowBright, whiteBright), yellow],
  };

  return event =>
    matchEvent(event, {
      applicationEnded: ({ exitCode }) => {
        console.log(`[applicationEnded] ${exitCode}`);
      },
      messageDisplayed: ({ message, options }) => {
        const type = options?.type ?? 'normal';
        const [typeFormat, messageFormat] = colorByType[type];
        const typeText = typeFormat(`[${type}]`);
        const messageText = messageFormat(message);
        console.log(typeText + ' ' + messageText);
      },
    });
}
