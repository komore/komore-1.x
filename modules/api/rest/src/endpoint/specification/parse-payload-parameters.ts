/**
 * Extracts payload parameters from a literal
 * @template EndpointExtraSpecification Endpoint extra specification
 */
export type ParsePayloadParameters<EndpointExtraSpecification extends string> =
  EndpointExtraSpecification extends `${infer ParameterName}=:${infer PayloadParamPropertyName}&${infer Remaining}`
    ? ParameterName extends '_'
      ? {[K in PayloadParamPropertyName | keyof ParsePayloadParameters<Remaining>]: unknown}
      : ParsePayloadParameters<Remaining>
    : EndpointExtraSpecification extends `${infer _}=${infer _}&${infer Remaining}`
      ? ParsePayloadParameters<Remaining>
      : EndpointExtraSpecification extends `${infer ParameterName}=:${infer PayloadParamPropertyName}`
        ? ParameterName extends '_'
          ? {[K in PayloadParamPropertyName]: unknown}
          : {}
        : {}
;

type TestInner<X extends string> = X extends `${infer ParameterName}=:${infer PayloadParamPropertyName}&${infer Remaining}`
? ParameterName extends '_'
  ? 'now-true'
  : 'now-false'
: X;

type Test<X extends string> = X extends `${infer ParameterName}=:${infer PayloadParamPropertyName}&${infer Remaining}`
  ? ParameterName extends '_'
    ? true
    : Remaining
  : never;

type X1 = Test<'h1=value1&_=:middle&h2=value2'>;

type X = ParsePayloadParameters<'_=:x'>;
type Y = ParsePayloadParameters<'_=x'>;
type Z = ParsePayloadParameters<''>;
type Start = ParsePayloadParameters<'_=:start&h2=value2'>;
type End = ParsePayloadParameters<'h1=value1&_=:end'>;
type Middle = ParsePayloadParameters<'h1=value1&_=:middle&h2=value2'>;
type MiddleX = ParsePayloadParameters<'h1=:value1&_=:middle&h2=:value2'>;


type ParseQueryParameters<QueryString extends string> =
  QueryString extends `${infer _}=:${infer QueryParamValue}&${infer Remaining}`
    ? {[K in QueryParamValue | keyof ParseQueryParameters<Remaining>]: string}
    : QueryString extends `${infer _}=:${infer QueryParamValue}`
      ? {[K in QueryParamValue]: string}
      : {}
;
