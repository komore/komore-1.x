import { ParseKeyValueParameters } from "../parse-key-value-parameters";

/**
 * Extracts query parameters from a literal
 * @template QueryString Query string
 */
export type ParseQueryParameters<QueryString extends string> =
  QueryString extends `${infer _}=:${infer QueryParamPropertyName}&${infer Remaining}`
    ? {[K in QueryParamPropertyName | keyof ParseQueryParameters<Remaining>]: string}
    : QueryString extends `${infer _}=:${infer QueryParamPropertyName}`
      ? {[K in QueryParamPropertyName]: string}
      : {}
;

type QueryPropertyNames<QueryString extends string> = ParseKeyValueParameters<QueryString>[keyof ParseKeyValueParameters<QueryString>];
type X<QueryString extends string> = ParseKeyValueParameters<QueryString>[keyof ParseKeyValueParameters<QueryString>];

type lala = QueryPropertyNames<'a=:b&c=:d'>;
type test<T extends string> = QueryPropertyNames<T>;
type U<T extends string> = Record<QueryPropertyNames<T>[number], string>;
type Lala = U<'a=:b&c=:d'>;

type A1 = ParseKeyValueParameters<'a=:b&x=y&c=:d'>;
type A2 = A1[keyof A1];
type A3 = Record<A2, string>;
type ParseQueryParameters2<QueryString extends string> =
  QueryPropertyNames<QueryString>
;

type A4 = ParseQueryParameters2<'a=:b&x=y&c=:d'>;
type B = 