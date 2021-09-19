/**
 * Search query
 */
export interface SearchQuery {
  readonly cursor?: string;
  readonly query: string;
  readonly maxResults?: number;
}
