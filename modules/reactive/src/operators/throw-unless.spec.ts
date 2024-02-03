import { expectTypeOf } from 'expect-type';
import { feature } from '@komore/testing';

import { of } from '../creation/of';
import { firstValueFrom } from '../promise/first-value-from';
import { throwUnless } from './throw-unless';

feature('Throw unless operator', () => {
  it('does not throw when the condition passes', async () => {
    given: 'an emitted value filtered with an assertion';
    const value$ = of(42).pipe(
      throwUnless(
        value => value > 30,
        value => new Error(`value ${value} is not higher than 30`)
      )
    );
    when: 'retrieving the value';
    const value = await firstValueFrom(value$);
    then: 'the value has passed the filter';
    expect(value).toBe(42);
  });

  it('throws when the assertion fails', async () => {
    given: 'an emitted value filtered with an assertion';
    const value$ = of(42).pipe(
      throwUnless(
        value => value < 30,
        value => new Error(`value ${value} is not lower than 30`)
      )
    );
    expect: 'an error to be thrown';
    expect(firstValueFrom(value$)).rejects.toThrowError('value 42 is not lower than 30');
  });

  it('asserts the type when the condition is true', async () => {
    given: 'an emitted value filtered with an assertion';
    const value$ = (of(42) as Observable<number | string>).pipe(
      throwUnless(
        (value): value is number => typeof value === 'number',
        value => new Error(`value ${value} is not a number`)
      )
    );
    expect: 'the observable to have the correct type';
    expectTypeOf(value$).toEqualTypeOf<Observable<number>>();
  });
});
