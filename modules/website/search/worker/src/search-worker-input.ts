import type { SearchQuery } from '@komore/website/search';

/**
 * Search worker input
 */
export interface SearchWorkerInput {
  readonly query: SearchQuery;
}
