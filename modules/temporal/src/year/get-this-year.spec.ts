import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getThisYear } from './get-this-year';

describe('Get this year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => mockedCurrentPlainDate.clearMock());

  it('returns the current year', () => {
    when: 'getting the current year';
    const currentYear = getThisYear();

    expect: 'the correct year to have been returned';
    expect(currentYear).toBe(2020);
  });
});
