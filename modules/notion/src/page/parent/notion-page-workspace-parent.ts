/**
 * Notion page workspace parent
 */
export interface NotionPageWorkspaceParent {
  /**
   * Parent type
   */
  readonly type: 'workspace';
  /**
   * Whether the parent is a workspace
   */
  readonly workspace: true;
}
