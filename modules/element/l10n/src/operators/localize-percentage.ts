import { Languages } from "@komore/element/i18n";
import { Observable, OperatorFunction, pipe } from "rxjs";
import { withLatestFrom } from "rxjs/dist/types/operators";

export function localizePercentage(languages?: Observable<Languages> | Languages): OperatorFunction<number, string> {
  const numberFormat$ = 
  return pipe(
    withLatestFrom()
  )
}
