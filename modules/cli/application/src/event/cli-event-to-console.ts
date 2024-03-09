import { cliEvent, stringToStyledText, type DisplayedCliMessageType } from '@komore/cli';
import { matchEvent, type EventFromType } from '@komore/event';
import { identity } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that displays command-line events in the console, eventually emitting an exit code
 *
 * @returns Function that displays command-line events in the console, eventually emitting an exit code
 * @private
 */
export function cliEventToConsole(): (event: EventFromType<typeof cliEvent>) => void {
  const style = stringToStyledText;
  const colorByType: ReadonlyRecord<
    DisplayedCliMessageType,
    readonly [type: (value: string) => string, message: (value: string) => string]
  > = {
    failure: [style({ background: ['red', 'bright'], color: ['white', 'bright'] }), style({ color: 'red' })],
    normal: [identity, identity],
    success: [style({ background: ['green', 'bright'], color: ['white', 'bright'] }), style({ color: 'green' })],
    warning: [style({ background: ['yellow', 'bright'], color: ['white', 'bright'] }), style({ color: 'yellow' })],
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
