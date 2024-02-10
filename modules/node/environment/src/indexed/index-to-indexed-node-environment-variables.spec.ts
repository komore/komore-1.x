import { feature } from '@komore/testing';

import { type NodeEnvironmentVariables } from '../node-environment-variables';
import { indexToIndexedNodeEnvironmentVariables } from './index-to-indexed-node-environment-variables';

feature('Index to indexed environment variables', {
  'returns an environment variable object, given an index'() {
    given: 'environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_1_A: 'a1',
      PREFIX_1_B: 'b1',
    };
    and: 'an index';
    const index = 0;

    when: 'creating a function that returns an object from an index';
    const func = indexToIndexedNodeEnvironmentVariables(environmentVariables, {
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
    when: 'getting an environment variable object';
    const object = func(index);

    then: 'an object matching the index is returned';
    object !== undefined;
    object.a === 'a0';
    object.b === 'b0';
  },
});
