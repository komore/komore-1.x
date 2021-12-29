import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { _null } from './null';

describe('is null validation operator', () => {
  it('considers null values to be valid', async () => {
    given: 'a null value';
    const value = null;
    when: 'using the validation operator';
    const $ = of(value).pipe(_null());
    expect: 'no error to be thrown';
    await expect(lastValueFrom($)).not.toThrow();
  });

  it('considers non-null values to be invalid', async () => {
    given: 'a non-null value';
    const value = true;
    when: 'using the validation operator';
    const $ = of(value).pipe(_null());
    expect: 'an error to be thrown';
    await expect(lastValueFrom($)).toThrowError('null.not');
  });
});
