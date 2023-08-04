import { asObservable, distinctUntilChanged, map, shareReplay, switchMap } from '@komore/reactive';

import { createFormatterCache } from './formatter/create-formatter-cache';
import { createTranslationsCache } from './translation/create-translations-cache';
import { type Translator } from './translator';
import { type TranslatorOptions } from './translator-options';

/**
 * Creates a translator
 *
 * @param options Translator options
 * @return Translator
 */
export function createTranslator(options: TranslatorOptions): Translator {
  const activeLanguageCode$ = asObservable(options.languageCode).pipe(shareReplay({ bufferSize: 1, refCount: true }));
  const translationsCache = createTranslationsCache(options.translationsResolver);
  const formatterCache = createFormatterCache(translationsCache);

  return (message, translateOptions) => {
    const { key, parameters } = typeof message === 'string' ? { key: message, parameters: undefined } : message;
    const { languageCode: specificLanguageCode, namespace } = translateOptions ?? {};
    const languageCode$ = specificLanguageCode !== undefined ? asObservable(specificLanguageCode) : activeLanguageCode$;
    return languageCode$.pipe(
      switchMap(languageCode => formatterCache(languageCode, namespace, key)),
      map(formatter => formatter.format(parameters) as string),
      distinctUntilChanged(),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  };
}
