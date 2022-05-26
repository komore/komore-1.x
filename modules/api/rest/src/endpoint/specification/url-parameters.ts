/**
 * URL parameters
 * @template PathParameters Path parmeters
 * @template QueryParameters Query parameters
 */
export type UrlParameters<
  PathParameters extends Record<string, string>,
  QueryParameters extends Record<string, string>
> = Readonly<{
  path: Readonly<PathParameters>;
  query: Readonly<QueryParameters>;
}>;
