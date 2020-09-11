import { ProviderResult, TreeDataProvider, TreeItem } from 'vscode';
import { FileLocator } from '../../utilities';

/**
 * Help tree provider
 */
export class HelpTreeProvider implements TreeDataProvider<TreeItem> {
  private readonly treeItems: ReadonlyArray<TreeItem> = [
    {
      id: 'komore-help.documentation',
      label: '%view.komore-help.documentation.label%',
      description: '%view.komore-help.documentation.description%'
    },
    {
      id: 'komore-help.github',
      label: '%view.help.github.label%',
      description: '%view.help.github.description%',
      command: {
        title: '%view.help.github.label',
        command: 'komore.openGitHub'
      }
    },
    {
      id: 'komore-help.contact',
      label: '%view.help.contact.label%',
      description: '%view.help.contact.description%'
    },
    {
      id: 'komore-help.bug-report',
      label: '%view.help.bug-report.label%',
      description: '%view.help.bug-report.description%'
    },
    {
      id: 'komore-help.support',
      label: '%view.help.support.label%',
      description: '%view.help.support.description%'
    }
  ];

  /**
   * Class constructor
   * @param fileLocator File locator
   */
  constructor(private readonly fileLocator: FileLocator) {}

  /**
   * Gets a tree item from bounded context tree item
   * @param element
   * @returns Tree item
   */
  getTreeItem(element: TreeItem): TreeItem {
    return {
      ...element,
      iconPath: this.fileLocator.getIconUri('activitybar-icon.svg')
    };
  }

  /**
   * Gets the children of an element
   * @param element Element
   * @returns List of children, or the root nodes if no element as passed
   */
  getChildren(element?: TreeItem): ProviderResult<Array<TreeItem>> {
    if (element === undefined) {
      return [...this.treeItems];
    }

    return [];
  }
}
