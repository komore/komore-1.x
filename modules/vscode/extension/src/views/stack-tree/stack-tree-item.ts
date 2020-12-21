import { Uri } from 'vscode';

/**
 * Stack tree item type
 */
export type StackTreeItemType =
  'api' |
  'api-mutation-group' |
  'api-mutation' |
  'api-type' |
  'api-query-group' |
  'api-query' |
  'api-subscription-group' |
  'api-subscription' |
  'bounded-context' |
  'command-handler' |
  'command-handler-function' |
  'command-handler-on' |
  'command-store' |
  'event-reducer' |
  'event-reducer-on' |
  'event-store' |
  'stack'
;

/**
 * Stack tree item
 */
export type StackTreeItem = Readonly<{
  uri?: Uri;
  name: string;
  description?: string;
  type: StackTreeItemType;
  childNodes: ReadonlyArray<StackTreeItem>;
}>;
