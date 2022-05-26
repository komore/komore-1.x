import { feature } from '@komore/testing';
import { InvalidJsonWorkspaceConfigurationError } from './invalid-json-workspace-configuration-error';

feature('Invalid JSON workspace configuration error', {
  'Class instantiation'() {
    given: 'a property path';
    const propertyPath = 'test.path';
    and: 'a message';
    const message = 'test message';

    when: 'instantiating the class';
    const error = new InvalidJsonWorkspaceConfigurationError(propertyPath, message);

    then: 'the error name is InvalidJsonWorkspaceConfigurationError';
    error.name === 'InvalidJsonWorkspaceConfigurationError';
    expect(error.name).toBe('InvalidJsonWorkspaceConfigurationError');
    // TODO: post-jest (remove)
    and: 'the error message describes the property and the cause';
    error.message === `invalid value for JSON workspace property ${propertyPath}: ${message}`;
    // TODO: post-jest (remove)
    expect(error.message).toBe(`invalid value for JSON workspace property ${propertyPath}: ${message}`);
  },
});
