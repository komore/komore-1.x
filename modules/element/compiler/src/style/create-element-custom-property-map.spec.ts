import { factory } from 'typescript';
import type { ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';
import { createElementCustomPropertyMap } from './create-element-custom-property-map';

describe('Create element custom property map', () => {
  it('creates a custom property map interface declaration', () => {
    given: 'an element class name and custom property definitions';
    const propertyName1 = '--test-property';
    const propertyName2 = '--test-property2';
    const elementClassName = 'TestElement';
    const customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition> = [
      {
        name: propertyName1,
        inherits: true
      },
      {
        name: propertyName2,
        inherits: true
      }
    ];
    when: 'creating an element custom property map';
    const [interfaceDeclaration, interfaceIdentifier] = createElementCustomPropertyMap(
      factory,
      elementClassName,
      customPropertyDefinitions
    );
    expect: 'a correct interface declaration with both custom properties to be created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${elementClassName}CustomPropertyMap {
        "${propertyName1}": string;
        "${propertyName2}": string;
      }
    `);
    expect(interfaceIdentifier.text).toBe(`${elementClassName}CustomPropertyMap`);
  });
});
