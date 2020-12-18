import { pipe } from 'rxjs';
import { string } from './string';
import { validateConstraint } from './validate-constraint';

const emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

export const email = pipe(
  string,
  validateConstraint((value: string) => emailRegExp.test(value), 'string.email')
);
