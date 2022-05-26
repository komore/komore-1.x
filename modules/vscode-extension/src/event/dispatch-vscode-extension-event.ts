import { type Event, type Disposable } from 'vscode';
import { type VscodeExtensionEventTypes } from './vscode-extension-event-types';
import { vscodeExtensionEventsSubject } from './vscode-extension-events';

/**
 * Creates a function that dispatches
 *
 * @param eventType Event type
 * @param ev Event listener registration function
 */
export function dispatchVscodeExtensionEvent<EventType extends keyof VscodeExtensionEventTypes>(
  eventType: EventType,
  ev: Event<VscodeExtensionEventTypes[EventType]>
): Disposable {
  return ev(eventData => vscodeExtensionEventsSubject.next({ eventData, eventType }));
}
