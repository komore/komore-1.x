import { type MethodSignature, type NodeFactory } from 'typescript';
import { createAddRemoveEventListenerMethodSignature } from './element-event-listener-helpers';
import { type EventListenerTypedInformation } from './event-listener-typed-information';

/**
 * Creates a default or typed removeEventListener method signature
 *
 * When no type information is available, a default removeEventListener signature is returned:
 * ```ts
 * interface _ {
 *   removeEventListener(
 *     type: string,
 *     listener: EventListenerOrEventListenerObject,
 *     options?: boolean | EventListenerOptions
 *   );
 * }
 * ```
 *
 * When typed information is available, the signature includes that information:
 * ```ts
 * interface _ {
 *   removeEventListener<K extends keyof EventMap>(
 *     type: K,
 *     listener: (this: ElementClass, ev: CustomEvent<EventMap[K]>) => any,
 *     options?: boolean | EventListenerOptions
 *   );
 * }
 * ```
 * @param factory TypeScript node factory
 * @param eventListenerTypeInfo Event listener typed information
 * @returns Method signature
 */
export function createElementRemoveEventListener(
  factory: NodeFactory,
  eventListenerTypeInfo?: EventListenerTypedInformation
): MethodSignature {
  return createAddRemoveEventListenerMethodSignature(
    factory,
    'removeEventListener',
    'EventListenerOptions',
    eventListenerTypeInfo
  );
}
