import { type MethodSignature, type NodeFactory } from 'typescript';
import { createAddRemoveEventListenerMethodSignature } from './element-event-listener-helpers';
import { type EventListenerTypedInformation } from './event-listener-typed-information';

/**
 * Creates a default or typed addEventListener method signature
 *
 * When no type information is available, a default addEventListener signature is returned:
 * ```ts
 * interface _ {
 *   addEventListener(
 *     type: string,
 *     listener: EventListenerOrEventListenerObject,
 *     options?: boolean | AddEventListenerOptions
 *   );
 * }
 * ```
 *
 * When typed information is available, the signature includes that information:
 * ```ts
 * interface _ {
 *   addEventListener<K extends keyof EventMap>(
 *     type: K,
 *     listener: (this: ElementClass, ev: CustomEvent<EventMap[K]>) => any,
 *     options?: boolean | AddEventListenerOptions
 *   );
 * }
 * ```
 * @param factory TypeScript node factory
 * @param eventListenerTypedInfo Event listener typed information
 * @returns Method signature
 */
export function createElementAddEventListener(
  factory: NodeFactory,
  eventListenerTypedInfo?: EventListenerTypedInformation
): MethodSignature {
  return createAddRemoveEventListenerMethodSignature(
    factory,
    'addEventListener',
    'AddEventListenerOptions',
    eventListenerTypedInfo
  );
}
