import { asObservableLanguages, Languages } from '@komore/element/i18n';
import { Observable, OperatorFunction } from 'rxjs';

export function localizeDecimal(languages?: Observable<Languages> | Languages): OperatorFunction<number, string> {
  return asObservableLanguages(languages).pipe(selectedLanguages => )
}
