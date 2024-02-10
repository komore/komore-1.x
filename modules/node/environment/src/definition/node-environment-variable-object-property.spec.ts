import { feature } from '@komore/testing';

import { type NodeEnvironmentVariableObjectProperty } from './node-environment-variable-object-property';

feature('Environment variable object property', {
  'can extract a type from an environment variable definition with a parser'() {
    given: 'an environment variable definition with a parser';
    const environmentVariableDefinition = {
      description: 'Test description',
      name: 'Test name',
      parse: (value: string) => new URL(value),
    } as const;

    when: 'extracting the type from the environment variable definition';
    type ObjectProperty = NodeEnvironmentVariableObjectProperty<typeof environmentVariableDefinition>;

    expect: 'a type to be extract from an environment variable definition';
    expectTypeOf<ObjectProperty>().toEqualTypeOf<URL>();
  },

  'can extract a type from an environment variable definition without a parser'() {
    given: 'an environment variable definition without a parser';
    const environmentVariableDefinition = {
      description: 'Test description',
      name: 'Test name',
    } as const;

    when: 'extracting the type from the environment variable definition';
    type ObjectProperty = NodeEnvironmentVariableObjectProperty<typeof environmentVariableDefinition>;

    expect: 'a type to be extract from an environment variable definition';
    expectTypeOf<ObjectProperty>().toEqualTypeOf<string>();
  },
});
