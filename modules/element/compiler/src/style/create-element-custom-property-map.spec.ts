import { factory } from 'typescript';
import type { ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';
import { createElementCustomPropertyMap } from './create-element-custom-property-map';

describe('Create element custom property map', () => {
  it('creates a custom property map interface declaration', () => {
    // given: an element class name and custom property definitions
    const elementClassName = 'TestElement';
    const customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition> = [
      {
        name: '--test-property1',
        inherits: true
      },
      {
        name: '--test-property2',
        inherits: true
      }
    ];
    // when: creating an element custom property map
    const [interfaceDeclaration, interfaceIdentifier] = createElementCustomPropertyMap(
      factory,
      elementClassName,
      customPropertyDefinitions
    );
    // then: a correct interface declaration is created
    expect(interfaceDeclaration).toBeSource(`
      interface ${elementClassName}CustomPropertyMap {
        '--test-property1': string;
        '--test-property2': string;
      }
    `);
    expect(interfaceIdentifier.text).toBe(`${elementClassName}CustomPropertyMap`);
  });
});
