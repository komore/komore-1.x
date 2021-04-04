import { BROWSER_LANGUAGES } from '@komore/element/i18n';
import type { Observable } from '@komore/reactive';
import type { Locales } from './locales';

/**
 * Default locales
 */
export const DEFAULT_LOCALES: Observable<Locales> = BROWSER_LANGUAGES;
