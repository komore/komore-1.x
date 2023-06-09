import { type StringNormalizationForm } from './string-normalization-form';

/**
 * Creates a function that normalizes a string with a specific normalization form
 *
 * @param normalizationForm Normalization form
 * @returns Function that normalizes a string iwth a specific normalization form
 */
export function stringToNormalizedString(
  normalizationForm: StringNormalizationForm = 'NFC'
): (string: string) => string {
  return string => string.normalize(normalizationForm);
}
