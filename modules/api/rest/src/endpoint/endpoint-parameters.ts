/**
 * Endpoint parameters
 * @template PathParameters Path parmeters
 * @template QueryParameters Query parameters
 * @template HeaderParameters Header parameters
 * @template PayloadParameters Payload parameters
 */
export type EndpointParameters<
  PathParameters extends Record<string, string>,
  QueryParameters extends Record<string, string>,
  HeaderParameters extends Record<string, string>,
  PayloadParameters extends Record<string, unknown>
> = Readonly<{
  payload: PayloadParameters;
  header: HeaderParameters;
  path: PathParameters;
  query: QueryParameters;
}>;
