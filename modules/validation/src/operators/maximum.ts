import { pipe } from 'rxjs';
import { numeric } from './numeric';
import { validateConstraint } from './validate-constraint';

export const maximum = (maximum: number) =>
  pipe(
    numeric,
    validateConstraint(value => value <= maximum, 'numeric.maximum', { maximum })
  );
