import { type MethodSignature, type NodeFactory } from 'typescript';
import { type ElementMethodDefinition } from '../definition/element-method-definition';
import { createElementMethodSignature } from './create-element-method-signature';

/**
 * Creates an element interface's method signatures
 * @param factory TypeScript node factory
 * @param methodDefinitions Method definitions
 * @returns List of method signatures
 */
export function createElementInterfaceMethods(
  factory: NodeFactory,
  methodDefinitions: ReadonlyArray<ElementMethodDefinition>
): ReadonlyArray<MethodSignature> {
  return methodDefinitions.map(methodDefinition => {
    const [methodSignature] = createElementMethodSignature(factory, methodDefinition);
    return methodSignature;
  });
}
