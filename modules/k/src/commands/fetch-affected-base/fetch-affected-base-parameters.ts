/**
 * Fetch affected base parameters
 */
export interface FetchAffectedBaseParameters {
  /**
   * Branch name
   */
  readonly branchName?: string;
  /**
   * Fetch depth
   */
  readonly depth?: number;
  /**
   * Whether tags should be included
   */
  readonly includeTags?: boolean;
}
