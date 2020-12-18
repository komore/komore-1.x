import { pipe } from 'rxjs';
import { boolean } from './boolean';
import { constraint } from './constraint';

export const _false = pipe(
  boolean,
  constraint((value): value is false => value === false, 'boolean.false')
);
