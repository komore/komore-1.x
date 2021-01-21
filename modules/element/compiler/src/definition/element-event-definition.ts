import type { TypeReferenceNode } from 'typescript';

/**
 * Element event definition
 */
export interface ElementEventDefinition {
  readonly eventName: string;
  readonly eventDetailsType?: TypeReferenceNode;
}
