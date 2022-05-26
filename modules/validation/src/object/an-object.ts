import { type ReadonlyRecord } from '@komore/typescript';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

export const anObject: ConstraintValidator<unknown, ReadonlyRecord<string, unknown>> = createConstraintValidator(
  (value): value is ReadonlyRecord<string, unknown> => typeof value === 'object',
  'object.is'
);
