import { lastValueFrom, of } from 'rxjs';
import { minimum } from './minimum';

describe('minimum validation operator function', () => {
  const min = 123;
  const buildTestPipe = (value: number) => of(value).pipe(minimum(min));

  it('considers a value higher than the minimum to be valid', async () => {
    // given: a value higher than the minimum
    const value = min + 1;
    // when: using the validation operator
    const $ = buildTestPipe(value);
    // then: no error is thrown
    await expect(lastValueFrom($)).not.toThrow();
  });

  it('considers a value equal to the minimum to be valid', async () => {
    // given: a value equal to the minimum
    const value = min;
    // when: using the validation operator
    const $ = buildTestPipe(value);
    // then: no error is thrown
    await expect(lastValueFrom($)).not.toThrow();
  });

  it('considers a value lower than the minimum to be invalid', async () => {
    // given: a value lower than the minimum
    const value = min - 1;
    // when: using the validation operator
    const $ = buildTestPipe(value);
    // then: no error is thrown
    await expect(lastValueFrom($)).toThrowError('null.not');
  })
});
