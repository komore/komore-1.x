import { type VscodeExtensionEventTypes } from './vscode-extension-event-types';

/**
 * Visual Studio Code extension event
 *
 * @template EventType Event type name
 */
export interface VscodeExtensionEvent<EventType extends keyof VscodeExtensionEventTypes> {
  /**
   * Event data
   */
  readonly eventData: VscodeExtensionEventTypes[EventType];
  /**
   * Event type
   */
  readonly eventType: EventType;
}
