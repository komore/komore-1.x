import { pipe } from 'rxjs';
import { date } from './date';
import { constraint } from './constraint';

export const futureOrNow = pipe(
  date,
  constraint(value => new Date() <= value, 'date.future.now')
);
