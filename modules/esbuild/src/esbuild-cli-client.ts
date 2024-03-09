/**
 * esbuild CLI client symbol
 *
 * @private
 */
export const esbuildCliClientSymbol = Symbol('@komore/esbuild');

/**
 * esbuild CLI client
 */
export interface EsbuildCliClient {
  readonly [esbuildCliClientSymbol]: {
    readonly initialized$: Observable<void>;
    readonly workingDirectory: string;
  };
}
