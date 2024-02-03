import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { yesterday } from './yesterday';

feature('Yesterday', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('returns yesterday as a plain date', () => {
    when: 'getting yesterday';
    const result = getYesterday();

    expect: 'a plain date to have been returned';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    and: 'the plain date to occur yesterday';
    const { year, month, day } = result;
    expect(year).toBe(2019);
    expect(month).toBe(12);
    expect(day).toBe(31);
  });
});
