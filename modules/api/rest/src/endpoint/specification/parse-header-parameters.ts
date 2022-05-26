/**
 * Extracts header parameters from a literal
 * @template EndpointExtraSpecification Endpoint extra specification
 */
export type ParseHttpHeaderParameters<EndpointExtraSpecification extends string> =
  EndpointExtraSpecification extends `${infer HeaderName}=:${infer HeaderParamValue}&${infer Remaining}`
    ? HeaderName extends '_'
      ? {[K in keyof ParseHttpHeaderParameters<Remaining>]: string}
      : {[K in HeaderParamValue | keyof ParseHttpHeaderParameters<Remaining>]: string}
    : EndpointExtraSpecification extends `${infer HeaderName}=:${infer HeaderParamValue}`
      ? HeaderName extends '_'
        ? {}
        : {[K in HeaderParamValue]: string}
      : {}
;
