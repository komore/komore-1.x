import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getNextYear } from './get-next-year';

describe('Get next year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => mockedCurrentPlainDate.clearMock());

  it('returns the next year', () => {
    when: 'getting the next year';
    const nextYear = getNextYear();

    expect: 'the correct year to have been returned';
    expect(nextYear).toBe(2021);
  });
});
