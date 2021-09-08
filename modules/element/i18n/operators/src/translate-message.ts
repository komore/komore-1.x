import type { I18nMessage, Languages, ParameterizedI18nMessage } from '@komore/element/i18n';
import { asObservableLanguages } from '@komore/element/i18n';
import type { Observable, OperatorFunction } from '@komore/reactive';
import { map, pipe, withLatestFrom } from '@komore/reactive/operators';
import type { MessageFormatOptions } from '@messageformat/core';
import MessageFormat from '@messageformat/core';

/**
 * Translates a message
 * @param options Message format options
 * @param languages Languages
 * @returns Operator function
 */
export function translateMessage(
  message: string,
  options?: MessageFormatOptions,
  languages?: Languages | Observable<Languages>
): OperatorFunction<ParameterizedI18nMessage['parameters'], string>;

export function translateMessage(
  options?: MessageFormatOptions,
  languages?: Languages | Observable<Languages>
): OperatorFunction<I18nMessage, string>;

export function translateMessage(
  messageOrOptions?: string | MessageFormatOptions,
  optionsOrLanguages?: MessageFormatOptions | Languages | Observable<Languages>,
  languages?: Languages | Observable<Languages>
): OperatorFunction<I18nMessage | ParameterizedI18nMessage['parameters'], string>  {
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
