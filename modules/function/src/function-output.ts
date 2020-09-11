/**
 * Function output
 * @template R Result type
 */
export type FunctionOutput<R> = Readonly<{
  result: R;
}>;

/**
 * Function output type
 * @template FO Function output
 */
export type FunctionOutputType<FO> = FO extends FunctionOutput<infer R> ? R : never;
