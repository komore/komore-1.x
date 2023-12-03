import { type NodeFactory } from 'typescript';
import { type ElementPropertyDefinition } from '../element-property-definition';

/**
 * Builds an element property definition
 * @param factory TypeScript node factory
 */
export function buildElementPropertyDefinition(factory: NodeFactory): ElementPropertyDefinition {
  return {
    propertyName: 'test',
    propertyType: factory.createTypeReferenceNode('Test'),
    isOptional: false,
    isReadOnly: false
  };
}
