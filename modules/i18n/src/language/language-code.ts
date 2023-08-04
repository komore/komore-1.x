import { type languageCodes } from './language-codes';

/**
 * ISO 639-1 language code
 */
export type LanguageCode = (typeof languageCodes)[number];
