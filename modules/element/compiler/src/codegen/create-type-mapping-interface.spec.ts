import { factory } from 'typescript';
import { createTypeMappingInterface } from './create-type-mapping-interface';

describe('Create type mapping interface', () => {
  it('creates a type mapping interface with type mappings', () => {
    given: 'an interface name'
    const interfaceName = 'TestInterface';
    and: 'type mappings'
    const typeMappings = [
      {
        name: 'test-1',
        type: factory.createTypeReferenceNode('string')
      },
      {
        name: 'test-2',
        type: factory.createTypeReferenceNode('number')
      }
    ];
    when: 'creating a type mapping interface'
    const [interfaceDeclaration, identifier] = createTypeMappingInterface(factory, interfaceName, typeMappings);
    expect: 'an interface declaration with correct type mappings to be created'
    expect(interfaceDeclaration).toBeSource(`
      interface ${interfaceName} {
        "test-1": string;
        "test-2": number;
      }
    `);
    expect(identifier.text).toBe(interfaceName);
  });
});
