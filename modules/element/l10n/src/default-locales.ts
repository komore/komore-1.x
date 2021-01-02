import { BROWSER_LANGUAGES } from '@komore/element/i18n';
import { Observable } from 'rxjs';
import { Locales } from './locales';

/**
 * Default locales
 */
export const DEFAULT_LOCALES: Observable<Locales> = BROWSER_LANGUAGES;
