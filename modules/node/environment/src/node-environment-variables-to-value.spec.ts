import { feature, thrown } from '@komore/testing';

import { getNodeEnvironmentVariables } from './get-node-environment-variables';
import { type NodeEnvironmentVariables } from './node-environment-variables';
import { nodeEnvironmentError } from './node-environment.error';

feature('Get Node environment variables', {
  'can build an object from environment variables'() {
    given: 'environment variables';
    const testName1 = 'TEST_NAME_1';
    const testValue1 = 'test-variable-1';
    const testName2 = 'TEST_NAME_2';
    const testValue2 = 'test-variable-2';
    const environmentVariables: NodeEnvironmentVariables = {
      [testName1]: testValue1,
      [testName2]: testValue2,
    };

    when: 'getting the environment variables';
    const result = getNodeEnvironmentVariables(environmentVariables, {
      testProp1: {
        description: 'Test name 1',
        name: testName1,
      },
      testProp2: {
        description: 'Test name 2',
        name: testName2,
      },
    });

    then: 'the environment variables have been used to build a new object';
    result.testProp1 === testValue1;
    result.testProp2 === testValue2;
  },
  'throws an error if an environment variable is missing'() {
    given: 'environment variables';
    const environmentVariables: NodeEnvironmentVariables = {};
    and: 'an environment variable name that is not defined';
    const name = 'test-name';
    const description = 'Test name';

    expect: 'an error to be thrown when attempting to get the variable';
    getNodeEnvironmentVariables(environmentVariables, {
      test: {
        description,
        name,
      },
    });
    const e = thrown(nodeEnvironmentError.missingVariable);
    e.context.description === description;
    e.context.name === name;
  },
});
