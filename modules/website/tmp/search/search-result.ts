/**
 * Search result
 */
export interface SearchResult {
  readonly path: string;
  readonly score: number;
  readonly snippet: string;
  readonly title: string;
}
