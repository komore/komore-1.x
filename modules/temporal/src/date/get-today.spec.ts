import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getToday } from './get-today';

describe('Get today', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let restoreCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    restoreCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    restoreCurrentPlainDate();
  });

  it('returns today as a plain date', () => {
    when: 'getting today';
    const result = getToday();
    expect: 'a plain date to have been returned';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    and: 'the plain date to occur today';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
  });
});
