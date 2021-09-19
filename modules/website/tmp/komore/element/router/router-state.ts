/**
 * Router state
 */
export interface RouterState {
  readonly hash?: string;
  readonly matrixPrameters: Record<string, string>;
  readonly path: string;
  readonly pathParameters: Record<string, string>;
  readonly queryParameters: Record<string, string | ReadonlyArray<string>>;
}
