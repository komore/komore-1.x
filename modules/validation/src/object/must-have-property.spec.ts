import { firstValueFrom, of } from '@komore/reactive';
import { expectTypeOf } from 'expect-type';
import { createValidationContext } from '../context/create-validation-context';
import { mustBe } from '../must-be';
import { string } from '../string/string';
import { mustHaveProperty } from './must-have-property';

describe('Must have property', () => {
  it('Validating the presence of an optional property key', async () => {
    given: 'a property key';
    const propertyKey = 'test';
    and: 'an object with the property key optional';
    const value: { readonly existing: number; readonly [propertyKey]?: string } = { existing: 42 };
    and: 'a validation context for the object';
    const validationContext = createValidationContext(value);

    when: 'validating that the value has a property';
    const validatedValue$ = of(validationContext).pipe(mustHaveProperty(propertyKey));

    then: 'the validated value has the correct type';
    const validatedContext = await firstValueFrom(validatedValue$);
    const validatedValue = validatedContext.value;
    expectTypeOf(validatedValue).toEqualTypeOf<{ readonly existing: number; readonly [propertyKey]: string }>();
  });

  it('Validating the presence of an optional property and further refining it', async () => {
    given: 'a property key';
    const propertyKey = 'test';
    and: 'an object with the property key optional';
    const value: { readonly existing: number; readonly [propertyKey]?: string } = { existing: 42 };
    and: 'a validation context for the object';
    const validationContext = createValidationContext(value);

    when: 'validating that the value has a property';
    const validatedValue$ = of(validationContext).pipe(
      mustHaveProperty(propertyKey, $ => $.pipe(mustBe(string('hello'))))
    );

    then: 'the validated value has the correct type';
    const validatedContext = await firstValueFrom(validatedValue$);
    const validatedValue = validatedContext.value;
    expectTypeOf(validatedValue).toEqualTypeOf<{ readonly existing: number; readonly [propertyKey]: 'hello' }>();
  });

  it('Validating the presence of an unknown property key', async () => {
    given: 'a property key';
    const propertyKey = 'test';
    and: 'an object without the property key';
    const value: { readonly existing: number } = { existing: 42 };
    and: 'a validation context for the object';
    const validationContext = createValidationContext(value);

    when: 'validating that the value has a property';
    const validatedValue$ = of(validationContext).pipe(mustHaveProperty(propertyKey));

    then: 'the validated value has the correct type';
    const validatedContext = await firstValueFrom(validatedValue$);
    const validatedValue = validatedContext.value;
    expectTypeOf(validatedValue).toEqualTypeOf<{ readonly existing: number; readonly [propertyKey]: unknown }>();
  });
});
