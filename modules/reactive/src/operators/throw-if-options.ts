/**
 * throwIf options
 */
export interface ThrowIfOptions<T> {
  readonly condition: (value: T, index: number) => boolean;
  readonly errorFactory: (value: T) => unknown;
}
