/**
 * eToro login data API response
 *
 * @template T Value type
 */
export interface EToroLoginDataApiResponse<T> {
  readonly Content: T;
  readonly ErrorMessage: unknown | null;
  readonly StatusCode: number;
}
