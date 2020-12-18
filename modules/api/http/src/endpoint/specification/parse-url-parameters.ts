import { ParseUrlPathParameters } from './parse-url-path-parameters';
import { ParseUrlQueryParameters } from './parse-url-query-parameters';
import { UrlParameters } from './url-parameters';

/**
 * Extracts path and query parameters from a literal
 * @template UrlSpecification URL specification
 */
export type ParseUrlParameters<UrlSpecification extends string> =
  UrlSpecification extends `${infer Path}?${infer QueryString}`
    ? UrlParameters<ParseUrlPathParameters<Path>, ParseUrlQueryParameters<QueryString>>
    : UrlSpecification extends `?${infer QueryString}`
      ? UrlParameters<{}, ParseUrlQueryParameters<QueryString>>
      : UrlParameters<ParseUrlPathParameters<UrlSpecification>, {}>
;
