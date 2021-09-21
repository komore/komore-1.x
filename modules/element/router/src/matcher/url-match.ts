/**
 * URL match
 * @template PathParams Path parameters
 * @template QueryParams Query parameters
 */
export interface UrlMatch<
  PathParams extends Record<string, string>,
  QueryParams extends Record<string, string | ReadonlyArray<string>>
> {
  readonly pathParams: PathParams;
  readonly queryParams: QueryParams;
  readonly url: URL;
  readonly matchedPath: string;
}
