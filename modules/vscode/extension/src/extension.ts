import {
  commands,
  ConfigurationChangeEvent,
  ExtensionContext,
  Uri,
  ViewColumn,
  WebviewPanel,
  window,
  workspace,/*,
  WorkspaceConfiguration*/
} from 'vscode';
import { HelpTreeProvider, StackTreeProvider } from './views';
import { FileLocator } from './utilities';
//import { Logger } from './utilities/logger';

/**
 * komore Visual Studio Code extension
 */
class KomoreExtension {
  private static instance?: KomoreExtension;

  //private readonly logger = new Logger();
  private readonly fileLocator: FileLocator;
  private readonly helpTreeProvider: HelpTreeProvider;
  private readonly stackTreeProvider: StackTreeProvider;
  //private workspaceConfiguration?: WorkspaceConfiguration;

  /**
   * Class constructor
   * @param extensionContext Extension context
   */
  constructor(private readonly extensionContext: ExtensionContext) {
    this.fileLocator = new FileLocator(extensionContext);
    this.helpTreeProvider = new HelpTreeProvider(this.fileLocator);
    this.stackTreeProvider = new StackTreeProvider(this.fileLocator);
  }

  /**
   * Activates the extension
   * @param extensionContext Extension context
   */
  static async activateExtension(extensionContext: ExtensionContext): Promise<void> {
    const instance = KomoreExtension.instance = new KomoreExtension(extensionContext);
    await instance.activate();
  }

  /**
   * Deactivates the extension
   */
  static async deactivateExtension(): Promise<void> {
    if (KomoreExtension.instance !== undefined) {
      await KomoreExtension.instance.deactivate();
      KomoreExtension.instance = undefined;
    }
  }

  /**
   * Activates the extension
   */
  async activate(): Promise<void> {
    // this.workspaceConfiguration = workspace.getConfiguration('komore');
    this.extensionContext.subscriptions.push(
      commands.registerCommand('komore.openBoundedContext', uri => this.openBoundedContext(uri)),
      commands.registerCommand('komore.openCommandHandler', uri => this.openCommandHandler(uri)),
      commands.registerCommand('komore.openCommandHandlerFunction', uri => this.openCommandHandlerFunction(uri)),
      commands.registerCommand('komore.openCommandStore', uri => this.openCommandStore(uri)),
      commands.registerCommand('komore.openEventReducer', uri => this.openEventReducer(uri)),
      commands.registerCommand('komore.openEventStore', uri => this.openEventStore(uri)),
      commands.registerCommand('komore.openStack', uri => this.openStack(uri)),
      workspace.onDidChangeConfiguration(event => this.onConfigurationChange(event))
    );

    let webviewPanel: WebviewPanel | undefined = window.createWebviewPanel(
      'komore-console',
      'komore Console Yay',
      ViewColumn.Active,
      {
        retainContextWhenHidden: true,
        enableScripts: true
      }
    );
    webviewPanel.onDidDispose(() => {
      webviewPanel = undefined;
    });
    webviewPanel.iconPath = this.fileLocator.getIconUri('activitybar-icon.svg');
    webviewPanel.webview.html = `
      <html>
        <head>
          <title>Weeee</title>
        </head>
        <body>
          Hello world!!<br>
          It's alive!
        </body>
      </html>
    `;

    this.extensionContext.subscriptions.push(webviewPanel);

    window.createTreeView('komore-help-tree', {
      treeDataProvider: this.helpTreeProvider,
      showCollapseAll: true
    });
    window.createTreeView('komore-stack-tree', {
      treeDataProvider: this.stackTreeProvider,
      showCollapseAll: true
    });
  }

  /**
   * Deactivates the extension
   */
  async deactivate(): Promise<void> {
    console.log('Deactivate!');
  }

  /**
   * Open a bounded handler
   * @param uri URI
   */
  private openBoundedContext(uri: Uri): void {
    const msg = `Open bounded context not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open a command handler
   * @param uri URI
   */
  private openCommandHandler(uri: Uri): void {
    const msg = `Open command handler not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open a command handler function
   * @param uri URI
   */
  private openCommandHandlerFunction(uri: Uri): void {
    const msg = `Open command handler function not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open a command store
   * @param uri URI
   */
  private openCommandStore(uri: Uri): void {
    const msg = `Open command store not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open an event reducer
   * @param uri URI
   */
  private openEventReducer(uri: Uri): void {
    const msg = `Open event reducer not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open an event store
   * @param uri URI
   */
  private openEventStore(uri: Uri): void {
    const msg = `Open event store not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Open a stack
   * @param uri URI
   */
  private openStack(uri: Uri): void {
    const msg = `Open stack not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  }

  /**
   * Callback triggered upon configuration change
   * @param event Configuration change event
   */
  private onConfigurationChange(event: ConfigurationChangeEvent): void {
    if (!event.affectsConfiguration('komore')) {
      return;
    }

    window.showInformationMessage('Apply komore console configuration changes?', 'Apply').then(selected => {
      if (selected === 'Apply') {
        commands.executeCommand('komore.loadConfiguration');
      }
    });
  }
}

/**
 * Activate the extension
 * @param context Extension context
 */
export const activate = (context: ExtensionContext) => {
  KomoreExtension.activateExtension(context);
}

/**
 * Deactivates the extension
 */
export const deactivate = () => KomoreExtension.deactivateExtension();
