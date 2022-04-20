import { type supportedComprehendLanguages } from './supported-comprehend-languages';

/**
 * Supported AWS Comprehend language
 */
export type SupportedComprehendLanguage = typeof supportedComprehendLanguages[number];
