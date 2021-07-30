import { WeekDay } from './week-day';
import { WEEK_DAYS } from './week-days';

describe('Week days', () => {
  it('includes all week days in order', () => {
    expect(WEEK_DAYS).toStrictEqual([
      WeekDay.MONDAY,
      WeekDay.TUESDAY,
      WeekDay.WEDNESDAY,
      WeekDay.THURSDAY,
      WeekDay.FRIDAY,
      WeekDay.SATURDAY,
      WeekDay.SUNDAY
    ]);
  });
});
