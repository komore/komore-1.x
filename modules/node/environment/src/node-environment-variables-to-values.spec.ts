import { feature } from '@komore/testing';

import { getIndexedNodeEnvironmentVariables } from './get-indexed-node-environment-variables';
import { type NodeEnvironmentVariables } from './node-environment-variables';

feature('Get indexed Node environment variables', {
  'can build a list of objects from environment variables'() {
    given: 'environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_1_A: 'a1',
      PREFIX_1_B: 'b1',
    };

    when: 'getting indexed environment variables';
    const variables = getIndexedNodeEnvironmentVariables(environmentVariables, {
      prefix: 'PREFIX',
      definitions: {
        a: {
          description: 'Variable A',
          name: 'A',
        },
        b: {
          description: 'Variable B',
          name: 'B',
        },
      },
    });

    then: 'the correct number of objects is returned';
    variables.length === 2;
    and: 'the objects to have the correct properties';
    const object1 = variables[0];
    object1 !== undefined;
    object1.a === 'a0';
    object1.b === 'b0';
    const object2 = variables[1];
    object2 !== undefined;
    object2.a === 'a1';
    object2.b === 'b1';
  },

  'can build a map of objects from environment variables'() {
    given: 'environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_1_A: 'a1',
      PREFIX_1_B: 'b1',
    };

    when: 'getting indexed environment variables';
    const variables = getIndexedNodeEnvironmentVariables(
      environmentVariables,
      {
        prefix: 'PREFIX',
        definitions: {
          a: {
            description: 'Variable A',
            name: 'A',
          },
          b: {
            description: 'Variable B',
            name: 'B',
          },
        },
      },
      definition => [definition.a, definition]
    );

    then: 'the correct number of objects is returned';
    variables.size === 2;
    and: 'the objects to have the correct properties';
    const object1 = variables.get('a0');
    object1 !== undefined;
    object1.a === 'a0';
    object1.b === 'b0';
    const object2 = variables.get('a1');
    object2 !== undefined;
    object2.a === 'a1';
    object2.b === 'b1';
  },
});
