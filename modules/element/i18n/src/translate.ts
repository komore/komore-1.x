import MessageFormat, { type MessageFormatOptions } from '@messageformat/core';

import { map, type Observable } from '@komore/reactive';

import { asObservableLanguages } from './as-observable-languages';
import { type I18nMessage } from './i18n-message';
import { type Languages } from './languages';

export function translate(
  message: I18nMessage,
  options?: MessageFormatOptions,
  languages?: Languages | Observable<Languages>
): Observable<string> {
  const inputMessage = typeof message === 'string' ? { message } : message;
  return asObservableLanguages(languages).pipe(
    map(selectedLanguages => new MessageFormat([...selectedLanguages], options)),
    map(messageFormat => messageFormat.compile(inputMessage.message)),
    map(messageFunction => messageFunction(inputMessage.parameters) as string)
  );
}
