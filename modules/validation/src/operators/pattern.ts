import { pipe } from 'rxjs';
import { string } from './string';
import { constraint } from './constraint';

export const pattern = (regExp: RegExp) =>
  pipe(
    string,
    constraint((value: string) => regExp.test(value), 'string.regexp')
  );
