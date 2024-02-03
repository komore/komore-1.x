/**
 * Week day
 */
export type WeekDay = (1 | 2 | 3 | 4 | 5 | 6 | 7) & {
  readonly __tag_temporalWeekDay: unique symbol;
};
