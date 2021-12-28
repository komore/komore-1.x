/**
 * Creates a function that normalizes a string with a specific normalization form
 * @param normalizationForm Normalization form
 * @returns Function that normalizes a string iwth a specific normalization form
 */
export function toNormalizedString(normalizationForm: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFC'): (str: string) => string {
  return str => str.normalize(normalizationForm);
}
