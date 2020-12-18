import { SearchResultModel } from './search-result.model';

/**
 * Search state
 */
export type SearchState = Readonly<{
  query: string;
  results: ReadonlyArray<SearchResultModel>;
}>;
