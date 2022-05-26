import { feature } from '@komore/testing';
import { ConstraintViolationError } from './constraint-violation-error';
import { ValidationError } from './validation-error';

feature('Validation error', {
  'Class instantiation'() {
    given: 'constraint violation errors';
    const constraintViolations = [new ConstraintViolationError('test-id')];

    when: 'instantiating a validation error';
    const validationError = new ValidationError(constraintViolations);

    then: 'the error message mentions the number of violated constraints';
    validationError.message === 'validation failed: 1 constraint(s) violated';
    and: 'the error has a ValidationError name';
    validationError.name === 'ValidationError';
    and: 'the constraint violation errors are available as a property';
    validationError.constraintViolations === constraintViolations;
  },
});
