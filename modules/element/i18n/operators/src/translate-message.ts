import type { I18nMessage, Languages } from '@komore/element/i18n';
import { asObservableLanguages } from '@komore/element/i18n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { map, withLatestFrom } from '@komore/reactive/operators';
import type { MessageFormatOptions } from '@messageformat/core';
import MessageFormat from '@messageformat/core';

/**
 * Translates a message
 * @param options Message format options
 * @param languages Languages
 * @returns Operator function
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
