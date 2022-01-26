import { type TypeMapping } from '@komore/typescript/compiler';
import { type NodeFactory, type TypeReferenceNode } from 'typescript';
import { type ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';

export function customPropertyDefinitionToTypeMapping(
  factory: NodeFactory
): (customPropertyDefinition: ElementCustomPropertyDefinition) => TypeMapping {
  const stringType = factory.createTypeReferenceNode('string');
  //const numberType = factory.createTypeReferenceNode('number');
  const syntaxMapping = new Map<string, TypeReferenceNode>();

  return customPropertyDefinition => {
    const { name, syntax } = customPropertyDefinition.propertyDefinition;
    const type = syntaxMapping.get(syntax ?? '*') ?? stringType;
    return {
      name,
      type
    };
  };
}
