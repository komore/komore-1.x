import { of } from '@komore/reactive';
import { createValidationContext } from '../context/create-validation-context';
import { mustHavePropertyWithDefault } from './must-have-property-with-default';

describe('Must have property with default', () => {
  it('works', async () => {
    const value = { existing: 42 };
    const validationContext = createValidationContext(value);

    of(validationContext).pipe(
      mustHavePropertyWithDefault('test', 'abc')
    );
  })
});
