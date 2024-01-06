import { type SearchResult } from '@komore/website/search';

import { type SearchWorkerInput } from './search-worker-input';

/**
 * Search worker output
 */
export interface SearchWorkerOutput {
  readonly input: SearchWorkerInput;
  readonly loading: boolean;
  readonly results: ReadonlyArray<SearchResult>;
}
