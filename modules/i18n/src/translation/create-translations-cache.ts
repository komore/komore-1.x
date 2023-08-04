import { mapToValue } from '@komore/collection';
import { cache, type Observable } from '@komore/reactive';

import { buildTranslationsKey } from './build-translations-key';
import { type TranslationsResolver } from './translations-resolver';
import { type Translations } from './translations';

/**
 * Creates a translations cache, holding resolved translations
 *
 * @param translationsResolver Translations resolver
 * @returns Translations resolver that caches results
 * @private
 */
export function createTranslationsCache(translationsResolver: TranslationsResolver): TranslationsResolver {
  const translationsCache = new Map<string, Observable<Translations>>();

  return (languageCode, namespace) => {
    const key = buildTranslationsKey(languageCode, namespace);
    return mapToValue(translationsCache, key, () => translationsResolver(languageCode, namespace).pipe(cache()));
  };
}
