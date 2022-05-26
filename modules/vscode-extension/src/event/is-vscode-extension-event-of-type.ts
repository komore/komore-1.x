import { type VscodeExtensionEvent } from './vscode-extension-event';
import { type VscodeExtensionEventTypes } from './vscode-extension-event-types';

/**
 * Creates a function that tests whether a Visual Studio extension event is one of a number of possible types
 *
 * @param eventTypes Event types
 * @returns Function that tests whether a Visual Studio extension event is one of the specified types
 * @template EventTypes Event types
 */
export function isVscodeExtensionEventOfType<EventTypes extends ReadonlyArray<keyof VscodeExtensionEventTypes>>(
  ...eventTypes: EventTypes
): (event: VscodeExtensionEvent<keyof VscodeExtensionEventTypes>) => event is VscodeExtensionEvent<EventTypes[number]> {
  return (event): event is VscodeExtensionEvent<EventTypes[number]> => eventTypes.includes(event.eventType);
}
