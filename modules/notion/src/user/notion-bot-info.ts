/**
 * Notion bot information
 */
export type NotionBotInfo =
  | {
      readonly owner: {
        readonly type: 'user';
      };
      readonly workspace_name: null;
    }
  | {
      readonly owner: {
        readonly type: 'workspace';
      };
      readonly workspace_name: string;
    };
