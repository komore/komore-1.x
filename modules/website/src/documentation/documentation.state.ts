
/**
 * Documentation state
 */
export type DocumentationState = Readonly<{
  content?: string;
  contentError?: Error;
  contentLoading: boolean;
  contentPath?: string;
}>;
