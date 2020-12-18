import { pipe } from 'rxjs';
import { date } from './date';
import { constraint } from './constraint';

export const future = pipe(
  date,
  constraint(value => new Date() < value, 'date.future')
);
