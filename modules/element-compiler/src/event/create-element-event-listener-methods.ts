import { type MethodSignature, type NodeFactory, type TypeNode, type TypeReferenceNode } from 'typescript';
import { createElementAddEventListener } from './create-element-add-event-listener';
import { createElementRemoveEventListener } from './create-element-remove-event-listener';
import { createEventMapIndexParameter } from './element-event-listener-helpers';
import { type EventListenerTypedInformation } from './event-listener-typed-information';

/**
 * Creates an element's event listener methods
 * @param factory TypeScript node factory
 * @param elementType Element type
 * @param eventMapType Event map type
 * @returns List of method signatures
 */
export function createElementEventListenerMethods(
  factory: NodeFactory,
  elementType: TypeReferenceNode,
  eventMapType: TypeNode
): ReadonlyArray<MethodSignature> {
  const eventListenerTypedInfo: EventListenerTypedInformation = {
    elementType,
    eventMapType,
    eventMapIndex: createEventMapIndexParameter(factory, eventMapType)
  };

  return [
    createElementAddEventListener(factory, eventListenerTypedInfo),
    createElementAddEventListener(factory),
    createElementRemoveEventListener(factory, eventListenerTypedInfo),
    createElementRemoveEventListener(factory)
  ];
}
