import { type TemporalWithDate } from '../temporal-with-date';
import { isWeekEnd } from '../week-end/is-week-end';

export function isWeekAfter(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  const referencePlainDate = asPlainDate(referenceTemporal);
  const startOfWeek = now.subtract({ days: now.dayOfWeek - 1 });

}
