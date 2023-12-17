import { eventToProperties, isEventOfType, matchEvent } from '@komore/event';
import { tapNext, filter, map, type Observable } from '@komore/reactive';

import { cliEvent, type CliEvent } from '../cli.event';

/**
 * Creates a function that displays command-line events in the console, eventually emitting an exit code
 *
 * @returns Function that displays command-line events in the console, eventually emitting an exit code
 * @private
 */
export function cliEventToConsole(): (events: Observable<CliEvent>) => Observable<number> {
  return events =>
    events.pipe(
      tapNext(event =>
        matchEvent(event, {
          applicationEnded: ({ exitCode }) => {
            console.log(`[applicationEnded] ${exitCode}`);
          },
          messageDisplayed: ({ message, options }) => {
            const type = options?.type ?? 'normal';
            console.log(`[${type.toLocaleUpperCase()}] ${message}`);
          },
        })
      ),
      filter(isEventOfType(cliEvent.applicationEnded)),
      map(eventToProperties),
      map(properties => properties.exitCode)
    );
}
