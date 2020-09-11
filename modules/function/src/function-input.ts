/**
 * Function input
 * @template P Parameters type
 * @template C Context type
 */
export type FunctionInput<P, C> = Readonly<{
  parameters: P;
  context: C;
}>;

/**
 * Function input parameters type
 * @template FI Function input
 */
export type FunctionInputParametersType<FI> = FI extends FunctionInput<infer P, any> ? P : never;

/**
 * Function input context type
 * @template FI Function input
 */
export type FunctionInputContextType<FI> = FI extends FunctionInput<any, infer C> ? C : never;
