import type { Locales } from '@komore/element/l10n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { withLatestFrom } from '@komore/reactive/operators';

export function localizePercentage(languages?: Observable<Locales> | Locales): OperatorFunction<number, string> {
  const numberFormat$;
  return pipe(withLatestFrom());
}
