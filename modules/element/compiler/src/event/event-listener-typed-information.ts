import type { TypeReferenceNode } from 'typescript';
import type { EventMapIndex } from './event-map-index';

/**
 * Event listener typed information
 */
export interface EventListenerTypedInformation {
  readonly elementType: TypeReferenceNode;
  readonly eventMapType: TypeReferenceNode;
  readonly eventMapIndex: EventMapIndex;
}
