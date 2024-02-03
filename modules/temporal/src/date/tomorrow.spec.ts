import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { tomorrow } from './tomorrow';

feature('Tomorrow', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('returns tomorrow as a plain date', () => {
    when: 'getting tomorrow';
    const result = tomorrow();

    expect: 'a plain date to have been returned';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    and: 'the plain date to occur tomorrow';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(2);
  });
});
