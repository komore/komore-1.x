import { type VscodeExtensionEvent } from './vscode-extension-event';
import { type VscodeExtensionEventTypes } from './vscode-extension-event-types';

export function vscodeExtensionEventToEventData<EventType extends keyof VscodeExtensionEventTypes>(
  event: VscodeExtensionEvent<EventType>
): VscodeExtensionEventTypes[EventType] {
  return event.eventData;
}
