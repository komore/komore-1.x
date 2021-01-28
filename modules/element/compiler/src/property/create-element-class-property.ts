import type { AccessorDeclaration, NodeFactory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertyGetAccessor } from './create-element-property-get-accessor';
import { createElementPropertySetAccessor } from './create-element-property-set-accessor';

/**
 * Creates an element property for a class
 * ```ts
 * get propertyName(): propertyType { }
 * set propertyName(value: propertyType) { }
 * ```
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @returns List of accessor declarations
 */
export function createElementClassProperty(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): ReadonlyArray<AccessorDeclaration> {
  const [getAccessor] = createElementPropertyGetAccessor(factory, propertyDefinition);
  const declarations: Array<AccessorDeclaration> = [getAccessor];

  if (!propertyDefinition.isReadOnly) {
    const [setAccessor] = createElementPropertySetAccessor(factory, propertyDefinition);
    declarations.push(setAccessor);
  }

  return declarations;
}
