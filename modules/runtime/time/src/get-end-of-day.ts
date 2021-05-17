
export function getEndOfDay(date: Date): Date {
  const newDate = new Date(date);
  // TODO: can this cause an issue with leap seconds? (vs next day at 00:00:00 then -1 ms)
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}
