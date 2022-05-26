import { feature } from '@komore/testing';
import { ConstraintViolationError } from './constraint-violation-error';

feature('Constraint violation error', {
  'Class instantiation'() {
    given: 'a message identifier';
    const messageId = 'test-id';
    and: 'constraints';
    const constraints = {};

    when: 'instantiating a constraint violation error';
    const constraintViolationError = new ConstraintViolationError(messageId, constraints);

    then: 'the error message is the message identifier';
    constraintViolationError.message === messageId;
    and: 'the error has a ConstraintViolationError name';
    constraintViolationError.name === 'ConstraintViolationError';
    and: 'the constraint violation errors are available as a property';
    constraintViolationError.constraints === constraints;
  },
});
