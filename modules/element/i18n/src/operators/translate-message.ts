import MessageFormat, { MessageFormatOptions } from '@messageformat/core';
import { Observable, OperatorFunction, pipe } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { asObservableLanguages } from '../as-observable-languages';
import { I18nMessage } from '../i18n-message';
import { Languages } from '../languages';

/**
 * Translates a message
 * @param options Message format options
 * @param languages Languages
 */
export function translateMessage(
  options?: MessageFormatOptions,
  languages?: Observable<Languages>
): OperatorFunction<I18nMessage, string> {
  const messageFormat$ = asObservableLanguages(languages).pipe(
    map(selectedLanguages => new MessageFormat([...selectedLanguages], options))
  );

  return pipe(
    map(i18nMessage => (typeof i18nMessage === 'string' ? { message: i18nMessage } : i18nMessage)),
    withLatestFrom(messageFormat$),
    map(([i18nMessage, messageFormat]) => {
      const messageFormatFunction = messageFormat.compile(i18nMessage.message);
      return messageFormatFunction(i18nMessage.parameters) as string;
    })
  );
}
