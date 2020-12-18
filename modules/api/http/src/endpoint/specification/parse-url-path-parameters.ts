/**
 * Extracts URL path parameters from a literal
 * @template Path Path
 */
export type ParseUrlPathParameters<Path extends string> =
  Path extends `${infer _}:${infer PathParamPropertyName}/${infer Remaining}`
    ? {[K in PathParamPropertyName | keyof ParseUrlPathParameters<Remaining>]: string}
    : Path extends `${infer _}:${infer PathParamPropertyName}`
      ? {[K in PathParamPropertyName]: string}
      : {}
;
