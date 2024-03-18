/**
 * Documentation state
 */
export interface DocumentationState {
  readonly content?: string;
  readonly contentError?: Error;
  readonly contentLoading: boolean;
  readonly contentPath?: string;
}
