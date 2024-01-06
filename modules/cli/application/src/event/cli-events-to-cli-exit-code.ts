import { cliEvent } from '@komore/cli';
import { eventToProperties, isEventOfType, type EventFromType } from '@komore/event';
import { filter, first, map, type Observable } from '@komore/reactive';

/**
 * Returns an observable command-line interface exit code, given a stream of command-line interface events
 *
 * @param cliEvents Stream of command-line interface events
 * @returns Observable command-line interface exit code
 * @private
 */
export function cliEventsToCliExitCode(cliEvents: Observable<EventFromType<typeof cliEvent>>): Observable<number> {
  return cliEvents.pipe(
    filter(isEventOfType(cliEvent.applicationEnded)),
    first(),
    map(eventToProperties),
    map(properties => properties.exitCode)
  );
}
