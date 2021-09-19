import type { SearchResult } from './search-result';
import type { SearchWorkerInput } from './search-worker-input';

/**
 * Search worker result
 */
export interface SearchWorkerResult {
  readonly input: SearchWorkerInput;
  readonly loading: boolean;
  readonly results: ReadonlyArray<SearchResult>;
}
