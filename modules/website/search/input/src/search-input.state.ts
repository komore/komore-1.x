import type { SearchResult } from '@komore/website/search';

/**
 * Search input state
 */
export interface SearchInputState {
  readonly query: string;
  readonly results: ReadonlyArray<SearchResult>;
}
