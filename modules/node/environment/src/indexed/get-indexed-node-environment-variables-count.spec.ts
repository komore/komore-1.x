import { feature } from '@komore/testing';

import { type NodeEnvironmentVariables } from '../node-environment-variables';
import { getIndexedNodeEnvironmentVariablesCount } from './get-indexed-node-environment-variables-count';

feature('Get indexed Node enviroment variables count', {
  'can return the number of indexed environment variables'() {
    given: 'indexed environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_1_A: 'a1',
      PREFIX_1_B: 'b1',
    };

    when: 'getting the number of indexed environment variables';
    const count = getIndexedNodeEnvironmentVariablesCount(environmentVariables, {
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

    expect: 'the correct indexed environment variable count to be returned';
    count === 2;
  },
  'returns 0 if no matching environment variables are found'() {
    given: 'indexed environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_A: 'a0',
    };

    when: 'getting the number of indexed environment variables';
    const count = getIndexedNodeEnvironmentVariablesCount(environmentVariables, {
      prefix: 'PREFIX',
      definitions: {
        a: {
          description: 'Variable A',
          name: 'A',
        },
      },
    });

    expect: '0 to have been returned';
    count === 0;
  },
  'ignores missing optional variables'() {
    given: 'indexed environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_1_A: 'a1',
    };

    when: 'getting the number of indexed environment variables';
    const count = getIndexedNodeEnvironmentVariablesCount(environmentVariables, {
      prefix: 'PREFIX',
      definitions: {
        a: {
          description: 'Variable A',
          name: 'A',
        },
        b: {
          description: 'Variable B',
          name: 'B',
          optional: true,
        },
      },
    });

    expect: 'the correct indexed environment variable count to be returned';
    count === 2;
  },
  'stops at the first incomplete group'() {
    given: 'indexed environment variables';
    const environmentVariables: NodeEnvironmentVariables = {
      PREFIX_0_A: 'a0',
      PREFIX_0_B: 'b0',
      PREFIX_0_C: 'c0',
      PREFIX_1_A: 'a1',
      PREFIX_1_C: 'c1',
      PREFIX_2_A: 'a2',
      PREFIX_2_B: 'b2',
    };

    when: 'getting the number of indexed environment variables';
    const count = getIndexedNodeEnvironmentVariablesCount(environmentVariables, {
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
        c: {
          description: 'Variable C',
          name: 'C',
          optional: true,
        },
      },
    });

    expect: 'the correct indexed environment variable count to be returned';
    count === 1;
  },
});
