import { Month } from './month';
import { MONTHS } from './months';

describe('Months', () => {
  it('includes all months in order', () => {
    expect(MONTHS).toStrictEqual([
      Month.JANUARY,
      Month.FEBRUARY,
      Month.MARCH,
      Month.APRIL,
      Month.MAY,
      Month.JUNE,
      Month.JULY,
      Month.AUGUST,
      Month.SEPTEMBER,
      Month.OCTOBER,
      Month.NOVEMBER,
      Month.DECEMBER
    ]);
  });
});
