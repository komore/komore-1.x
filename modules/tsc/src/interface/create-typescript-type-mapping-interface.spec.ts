import { factory, SyntaxKind } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptTypeMappingInterface } from './create-typescript-type-mapping-interface';

feature('Create TypeScript type mapping interface', {
  'creates a type mapping interface with type mappings'() {
    given: 'an interface name';
    const name = 'TestInterface';
    and: 'type mappings';
    const typeMappings = [
      {
        name: 'test-1',
        type: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      },
      {
        name: 'test-2',
        type: factory.createKeywordTypeNode(SyntaxKind.NumberKeyword),
      },
    ];

    when: 'creating a type mapping interface';
    const [interfaceDeclaration, identifier] = createTypeScriptTypeMappingInterface(factory)({ name, typeMappings });

    expect: 'an interface declaration with correct type mappings to have been created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${name} {
        'test-1': string;
        'test-2': number;
      }
    `);
    identifier.text === name;
  },
});
