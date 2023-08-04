import { IntlMessageFormat } from 'intl-messageformat';

import { mapToValue } from '@komore/collection';
import { cache, distinctUntilChanged, map, type Observable } from '@komore/reactive';

import { type TranslationsResolver } from '../translation/translations-resolver';
import { buildFormatterKey } from './build-formatter-key';
import { type FormatterCache } from './formatter-cache';

/**
 * Creates a formatter cache
 *
 * @param translationsResolver Translations resolver
 * @returns Formatter cache
 */
export function createFormatterCache(translationsResolver: TranslationsResolver): FormatterCache {
  const formatterCache = new Map<string, Observable<IntlMessageFormat>>();

  return (languageCode, namespace, key) => {
    const formatterKey = buildFormatterKey(languageCode, namespace, key);
    return mapToValue(formatterCache, formatterKey, () =>
      translationsResolver(languageCode, namespace).pipe(
        map(translations => translations[key]),
        distinctUntilChanged(),
        map(message => new IntlMessageFormat(message ?? `unknown key "${key}"`)),
        cache()
      )
    );
  };
}
