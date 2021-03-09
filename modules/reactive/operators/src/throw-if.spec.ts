import { lastValueFrom, of } from 'rxjs';
import { throwIf } from './throw-if';

describe('Throw if operator', () => {
  it('does not throw when the condition is false', async () => {
    given: 'an emitted value filtered with a condition';
    const value$ = of(42).pipe(
      throwIf(
        value => value < 30,
        value => new Error(`value ${value} is lower than 30`)
      )
    );
    when: 'retrieving the emitted value';
    const value = await lastValueFrom(value$);
    then: 'the value passes the filter';
    expect(value).toBe(42);
  });

  it('throws when the condition is true', async () => {
    given: 'an emitted value filtered with a condition';
    const value$ = of(42).pipe(
      throwIf(
        value => value > 30,
        value => new Error(`value ${value} is higher than 30`)
      )
    );
    expect: 'an error to be thrown';
    expect(lastValueFrom(value$)).rejects.toThrowError('value 42 is higher than 30');
  });
});
