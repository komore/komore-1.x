import { type ElementCustomPropertyDefinition } from '../definition/element-custom-property-definition';
import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createElementCustomPropertyMap } from './create-element-custom-property-map';

describe('Create element custom property map', () => {
  it('creates a custom property map interface declaration', () => {
    given: 'an interface name';
    const interfaceName = 'TestInterface';
    and: 'custom property definitions';
    const propertyName1 = '--test-property';
    const propertyName2 = '--test-property2';
    const customPropertyDefinitions: ReadonlyArray<ElementCustomPropertyDefinition> = [
      {
        propertyDefinition: {
          name: propertyName1,
          inherits: true
        }
      },
      {
        propertyDefinition: {
          name: propertyName2,
          inherits: true
        }
      }
    ];
    and: 'a compiler context';
    const compilerContext = createMockElementCompilerContext();
    when: 'creating an element custom property map';
    const [interfaceDeclaration, interfaceIdentifier] = createElementCustomPropertyMap(
      compilerContext,
      interfaceName,
      customPropertyDefinitions
    );
    expect: 'a correct interface declaration with both custom properties to be created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${interfaceName} {
        '${propertyName1}': string;
        '${propertyName2}': string;
      }
    `);
    expect(interfaceIdentifier.text).toBe(interfaceName);
  });
});
