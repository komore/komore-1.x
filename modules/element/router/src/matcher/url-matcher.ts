import type { Observable } from 'rxjs';
import type { UrlMatch } from './url-match';

/**
 * Router matcher
 * @template PathParams Path parameters
 * @template QueryParams Query parameters
 */
export interface UrlMatcher<
  PathParams extends Record<string, string>,
  QueryParams extends Record<string, string | ReadonlyArray<string>>
> {
  <NewPathParams extends PathParams = PathParams, NewQueryParams extends QueryParams = QueryParams>(
    urlMatch: Observable<UrlMatch<PathParams, QueryParams>>
  ): Observable<UrlMatch<NewPathParams, NewQueryParams>>;
}
