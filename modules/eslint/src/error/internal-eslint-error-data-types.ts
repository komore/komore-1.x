/**
 * Internal ESLint error data types
 */
export interface InternalEsLintErrorDataTypes {
  'extend-config-missing': { readonly configName: string; readonly importerName: string };
}
