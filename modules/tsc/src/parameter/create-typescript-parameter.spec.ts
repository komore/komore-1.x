import { factory } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptParameter } from './create-typescript-parameter';

feature('Create TypeScript parameter', () => {
  const createParameter = createTypeScriptParameter(factory);

  return {
    'can create parameters'() {
      given: 'a parameter name and type';
      const name = 'testParameter';
      const typeName = 'TestType';
      const type = factory.createTypeReferenceNode(typeName);

      when: 'creating a parameter';
      const [declaration, identifier] = createParameter({ name, type });

      expect: 'a correct parameter declaration with the right name and type to have been created';
      expect(declaration).toBeInlineSource(`${name}: ${typeName}`);
      identifier.text === name;
    },
    'can create optional parameters'() {
      given: 'a parameter name and type';
      const name = 'testParameter';
      const typeName = 'TestType';
      const type = factory.createTypeReferenceNode(typeName);

      when: 'creating an optional parameter';
      const [declaration, identifier] = createParameter({ name, optional: true, type });

      expect: 'a correct parameter declaration with a question token to have been created';
      expect(declaration).toBeInlineSource(`${name}?: ${typeName}`);
      identifier.text === name;
    },
    'can create parameters with default values'() {
      given: 'a parameter name, type and initializer';
      const name = 'testParameter';
      const typeName = 'TestType';
      const type = factory.createTypeReferenceNode(typeName);
      const initialValue = 42;
      const initializer = factory.createNumericLiteral(initialValue);

      when: 'creating a parameter with an initializer';
      const [declaration, identifier] = createParameter({ initializer, name, type });

      expect: 'a correct parameter declaration with an initializer expression to have been created';
      expect(declaration).toBeInlineSource(`${name}: ${typeName} = ${initialValue}`);
      identifier.text === name;
    },
  };
});
