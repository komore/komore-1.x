import { EventEmitter, TreeDataProvider, TreeItem, TreeItemCollapsibleState, Uri } from 'vscode';
import { StackTreeItem } from './stack-tree-item';
import { FileLocator } from '../../utilities';
import { mockTree } from './mock-tree';

/**
 * Stack tree provider
 */
export class StackTreeProvider implements TreeDataProvider<StackTreeItem> {
  private readonly onDidChangeTreeDataEventEmitter = new EventEmitter<StackTreeItem | undefined>();

  readonly onDidChangeTreeData = this.onDidChangeTreeDataEventEmitter.event;

  /**
   * Class constructor
   * @param fileLocator File locator
   */
  constructor(private readonly fileLocator: FileLocator) {}

  /**
   * Gets a tree item from bounded context tree item
   * @param element Element
   * @returns Tree item
   */
  getTreeItem(element: StackTreeItem): TreeItem {
    return this.treeItemFromStackTreeItem(element);
  }

  /**
   * Gets the children of an element
   * @param element Element
   * @returns List of children, or the root nodes if no element as passed
   */
  async getChildren(element?: StackTreeItem): Promise<Array<StackTreeItem>> {
    if (element === undefined) {
      console.log('children for root');
      return [...mockTree];
    }

    const lala = [...element.childNodes];
    console.log('element', element, lala);
    return lala;
  }

  /**
   * Builds a tree item from a stack tree item
   * @param stackTreeItem Stack tree item
   * @returns Tree item
   */
  private treeItemFromStackTreeItem(stackTreeItem: StackTreeItem): TreeItem {
    const collapsibleState = this.getCollapsibleStateFromStackTreeItem(stackTreeItem);
    const iconUri = this.getIconPathFromStackTreeItem(stackTreeItem);
    return {
      label: stackTreeItem.name,
      description: stackTreeItem.description || true,
      tooltip: `Tooltip for ${stackTreeItem.name}`,
      collapsibleState,
      iconPath: {
        light: iconUri, // TODO: light/dark icons
        dark: iconUri
      },
      resourceUri: stackTreeItem.uri
    };
  }

  private getCollapsibleStateFromStackTreeItem(stackTreeItem: StackTreeItem): TreeItemCollapsibleState {
    switch (stackTreeItem.type) {
    case 'stack':
      return TreeItemCollapsibleState.Expanded;
    case 'api':
    case 'api-mutation-group':
    case 'api-query-group':
    case 'api-subscription-group':
    case 'bounded-context':
    case 'command-store':
    case 'event-store':
      return TreeItemCollapsibleState.Collapsed;
    default:
      return TreeItemCollapsibleState.None;
    }
  }

  private getIconPathFromStackTreeItem(stackTreeItem: StackTreeItem): Uri {
    return this.fileLocator.getIconUri('resource', `${stackTreeItem.type}.svg`);
  }
}
